const express = require('express');
const {distDir} = require("./config");
const { keystone, apps } = require('./index-serv.js');

keystone
    .prepare({
        apps: apps,
        dev: process.env.NODE_ENV !== 'production',
        distDir,
    })
    .then(async ({ middlewares }) => {
        await keystone.connect();
        const app = express();

        app.use(middlewares).listen(3008);
        console.log('Server started');

    });
