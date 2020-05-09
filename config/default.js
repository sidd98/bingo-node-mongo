const defer = require('config/defer',).deferConfig;
const p = require('../package.json',);

module.exports = {
    app: {
        name: p.name,
        description: p.description,
    },
    env: {
        mode: process.env.NODE_ENV,
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 4000,
    },
    api: {
        ROOT_URI: '/api',
        BASE_URI: defer((cfg,) => `${cfg.api.ROOT_URI}/`,),
    },
    db: {
        url: 'mongodb://db-server/Bingo',
        options: {
            useNewUrlParser: true,
            useCreateIndex: true,
            reconnectInterval: 1000,
            reconnectTries: 60,
        },
    },
};
