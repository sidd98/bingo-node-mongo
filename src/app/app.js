const express = require('express',);
const bodyParser = require('body-parser',);
const compression = require('compression',);
const path = require('path');
const config = require('config',);
const router = require('../router',);

const createApp = () => {
    const expressApp = express();
    expressApp.use(bodyParser.json({ limit: '50mb', },),);
    expressApp.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000,
    },),);
    expressApp.use(compression(),);
    expressApp.set('views', path.join(__dirname, 'views',),);
    expressApp.set('view engine', 'ejs',);

    //  Mount routes
    expressApp.use(config.get('api.BASE_URI',), router,);

    return expressApp;
};
module.exports = { createApp, };
