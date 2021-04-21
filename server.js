const express = require('express');
const {distDir} = require("./config");
const { keystone, apps } = require('./index.js');

keystone
    .prepare({
        apps: apps,
        dev: process.env.NODE_ENV !== 'production',
        distDir,
    })
    .then(async ({ middlewares }) => {
        await keystone.connect();
        const app = express();

        app.use(middlewares).listen(3000);
        console.log('Server started');

    });
