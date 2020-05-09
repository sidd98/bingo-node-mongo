const config = require('config',);
const mongoose = require('mongoose',);
const Promise = require('bluebird',);
const app = require('./src/app/app.js',);

const mongoDb = config.get('db',);

const connectAsync = Promise.promisify(mongoose.connect, {
    context: mongoose,
},);

mongoose.connection.on('connected', () => {
    console.log('Connected',);
},);

connectAsync(mongoDb.url, mongoDb.options,)
    .then(() => {
        const expressApp = app.createApp();
        expressApp.listen(config.get('env.port',),);
    },)
    .catch((error,) => {
        console.log('############error', error,);
        throw error;
    },);
