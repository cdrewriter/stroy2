const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { StaticApp } = require('@keystonejs/app-static');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);


const keystone = new Keystone({
    name: 'StroyExpert',

    adapter: new MongooseAdapter({ mongoUri: 'mongodb+srv://gbactakaha:Ctakan91@cluster0.nks7a.mongodb.net/stroys2?retryWrites=true&w=majority' }),
    //adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost:27017' }),

  sessionStore: new MongoStore({
    url: 'mongodb+srv://gbactakaha:Ctakan91@cluster0.nks7a.mongodb.net/stroys2?retryWrites=true&w=majority',
  }),
  
  cookieSecret: '3VgbStDykeq36VFCZhj+eWg6DzZFnkoQ',
  cookie: {
      secure: process.env.NODE_ENV === 'production', // Defaults to true in production
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      sameSite: false,
  },
  
  
  defaultAccess: {
    list: true,
    field: true,
    custom: true,
      authStrategy: true
  },
});

const { userIsAdmin } = require('./app/utils/access');
const { staticRoute, staticPath, distDir } = require('./config');
const {
    User,
    Post,
    Main,
    About,
    UslugiPage,
    Uslugi,
    Contact,
    CategoryPage,
    Feature,
    Material,
    Page,
    ConstructionPortfolio,
    PostCategory
  } = require('./schemaNEW');

keystone.createList('User', User);
keystone.createList('PostCategory', PostCategory);
keystone.createList('Post', Post);
keystone.createList('Main', Main);
keystone.createList('About', About);
keystone.createList('ConstructionPortfolio', ConstructionPortfolio);
keystone.createList('UslugiPage', UslugiPage);
keystone.createList('Uslugi', Uslugi);
keystone.createList('Feature', Feature);
keystone.createList('Material', Material);
keystone.createList('Page', Page);
keystone.createList('Contact', Contact);
keystone.createList('CategoryPage', CategoryPage);


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})
module.exports = {
    keystone,
    apps: [
      new GraphQLApp({
        apiPath: '/admin/api',
        graphiqlPath: '/admin/graphiql',
        apollo: { playground: true, introspection: true },
      }),
      new StaticApp({
        path: staticRoute,
        src: staticPath,
      }),
      new AdminUIApp({
        adminPath: '/admin',
        authStrategy,
       // hooks: require.resolve('./admin/'),
        enableDefaultRoute: false,
        isAccessAllowed: userIsAdmin,
      }),
      new NextApp({
        dir: 'app',
      }),
    ],
    distDir,
  };