const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { StaticApp } = require('@keystonejs/app-static');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const { createItem } = require('@keystonejs/server-side-graphql-client');
BD =  createItem({     
  listKey: 'BuildObject',
  item: { title: 'Test' },
  returnFields: `id title`,
})
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
    About,
    BuildObject,
    SmallBuild,
    Construction,
    ConstructionItem,
    Page,
    UslugiPage,
    Uslugi,
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

keystone.createList('Page', Page);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})

const getBuildObjects = async () => {

    const allBuildObjects = await getItems({ keystone, listKey: 'BuildObject', returnFields: 'title' });
    const someUsers = await getItems({
      keystone,
      listKey: 'BuildObject',
      returnFields: 'id title',
      where: { title: '10 подъездный дом по улице Макеева 11' },
    });
    
    console.log(allBuildObjects); // [{ name: 'user1' }, { name: 'user2' }];
    console.log(someUsers); // [{ name: 'user1' }];
  };


  
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
  getBuildObjects();