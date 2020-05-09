const mongoose = require('mongoose',);
const gameModel = require('./gameModel',);

/**
 * create a new game
 * @returns {Promise} - resolve with data or reject with error
 */
function createNewGame(randomNumbers,) {
    return new Promise((resolve, reject,) => gameModel.insertMany([{
        randomNumbers,
    },
    ], (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result[0],);
    },),);
}

/**
 * get a number for a game using game id
 * @returns {Promise} - resolve with data or reject with error
 */
function findNumberByGameId(game_id,) {
    return new Promise((resolve, reject,) => gameModel.aggregate([
        {
            $match: { _id: mongoose.Types.ObjectId(game_id,), },
        },
        {
            $project: {
                _id: 0,
                number: { $arrayElemAt: ['$randomNumbers', '$index', ], },
            },
        },
    ], async (error, result,) => {
        if (error) {
            return reject(error,);
        }
        // increment index before return
        await gameModel.update({
            _id: game_id,
        }, {
            $inc: { index: 1, },
        },);
        return resolve(result[0],);
    },),);
}

/**
 * get all number picked till now using game id
 * @returns {Promise} - resolve with data or reject with error
 */
function getUsedNumbers(game_id,) {
    return new Promise((resolve, reject,) => gameModel.aggregate([
        {
            $match: { _id: mongoose.Types.ObjectId(game_id,), },
        },
        {
            $project: {
                _id: 0,
                randomNumbers: 1,
                index: 1,
            },
        },
    ], (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result[0],);
    },),);
}

/**
 * get status of game using game id
 * @returns {Promise} - resolve with data or reject with error
 */
function getStatus(game_id,) {
    return new Promise((resolve, reject,) => gameModel.aggregate([
        {
            $match: { _id: mongoose.Types.ObjectId(game_id,), },
        },
        {
            $project: {
                _id: 0,
                users: 1,
                tickets: 1,
            },
        },
    ], (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result[0],);
    },),);
}


/**
 * update a Game model - no of users and no ticket
 * @returns {Promise} - resolve with data or reject with error
 */
function updateUsersAndTicketsCount(gameId,) {
    return new Promise((resolve, reject,) => gameModel.findOneAndUpdate({
        _id: gameId,
    }, {
        $inc: { users: 1, tickets: 1, },
    }, (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result,);
    },),);
}

/**
 * update game model - number of tickets
 * @returns {Promise} - resolve with data or reject with error
 */
function updateTicketsCount(gameId,) {
    return new Promise((resolve, reject,) => gameModel.findOneAndUpdate({
        _id: gameId,
    }, {
        $inc: { tickets: 1, },
    }, (error, result,) => {
        if (error) {
            return reject(error,);
        }
        return resolve(result,);
    },),);
}
module.exports = {
    createNewGame,
    findNumberByGameId,
    getUsedNumbers,
    getStatus,
    updateUsersAndTicketsCount,
    updateTicketsCount,
};
