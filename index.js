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
  },
});

const { userIsAdmin } = require('./utils/access');
const { staticRoute, staticPath, distDir } = require('./config');
const {
    User,
    Post,
    Main,
    About,
    BuildObject,
    SmallBuild,
    Construction,
    ConstructionItem,    
    UslugiPage,
    Uslugi,
    DefObj,
    DefObjPage,
    ConstructionPortfolio,
    PostCategory
  } = require('./schema');

keystone.createList('User', User);
keystone.createList('PostCategory', PostCategory);
keystone.createList('Post', Post);
keystone.createList('Main', Main);
keystone.createList('About', About);
keystone.createList('SmallBuild', SmallBuild);
keystone.createList('BuildObject', BuildObject);
keystone.createList('Construction', Construction);
keystone.createList('ConstructionItem', ConstructionItem);
keystone.createList('ConstructionPortfolio', ConstructionPortfolio);
keystone.createList('UslugiPage', UslugiPage);
keystone.createList('Uslugi', Uslugi);
keystone.createList('DefObjPage', DefObjPage);
keystone.createList('DefObj', DefObj);


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
        hooks: require.resolve('./admin/'),
        enableDefaultRoute: false,
        isAccessAllowed: userIsAdmin,
      }),
      new NextApp({
        dir: './',
      }),
    ],
    distDir,
  };