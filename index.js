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
    PostCategory
  } = require('./schema');

keystone.createList('User', User);
keystone.createList('PostCategory', PostCategory);
keystone.createList('Post', Post);
keystone.createList('Main', Main);


const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
  });
  

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
        enableDefaultRoute: false,
        isAccessAllowed: userIsAdmin,
      }),
      new NextApp({
        dir: './',
      }),
    ],
    distDir,
  };
  