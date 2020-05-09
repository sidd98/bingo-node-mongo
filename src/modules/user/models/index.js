const mongoose = require('mongoose',);
const userModel = require('./userModel',);

const { ObjectId, } = mongoose.Types;


/**
 * create a new user
 * @returns {Promise} - resolve with data or reject with error
 */
function createUser(gameId, userName, ticketId,) {
    return new Promise((resolve, reject,) => userModel.insertMany([
        {
            userName,
            gameIds: gameId,
            ticketIds: ticketId,
        },
    ], (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result[0],);
    },),);
}

/**
 * get user
 * @returns {Promise} - resolve with data or reject with error
 */
function checkUser(userName,) {
    return new Promise((resolve, reject,) => userModel.findOne({
        userName,
    }, (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result,);
    },),);
}

/**
 * check if user register or not
 * @returns {Promise} - resolve with data or reject with error
 */
function isUserRegistered(userId, gameId,) {
    return new Promise((resolve, reject,) => userModel.findOne({
        _id: userId,
        gameIds: {
            $in: [
                ObjectId(gameId,),
            ],
        },
    }, (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result,);
    },),);
}

/**
 * update userModel
 * @returns {Promise} - resolve with data or reject with error
 */
function registerUser(userId, gameId, ticketId,) {
    return new Promise((resolve, reject,) => userModel.findByIdAndUpdate({
        _id: userId,
    }, {
        $push: { gameIds: gameId, ticketIds: ticketId, },
    },
    { new: true, }, (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result,);
    },),);
}

/**
 * update user , add new ticket id for a user
 * @returns {Promise} - resolve with data or reject with error
 */
function addNewTicketId(userId, ticketId,) {
    return new Promise((resolve, reject,) => userModel.findByIdAndUpdate({
        _id: userId,
    }, {
        $push: { ticketIds: ticketId, },
    }, (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result,);
    },),);
}
module.exports = {
    createUser, checkUser, isUserRegistered, registerUser, addNewTicketId,
};
