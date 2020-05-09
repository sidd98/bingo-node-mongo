const mongoose = require('mongoose',);
const ticketModel = require('./ticketModel',);

/**
 * Save ticket for a game using game Id
 * @returns {Promise} - resolve with data or reject with error
 */
function saveTicket(ticket, gameId,) {
    return new Promise((resolve, reject,) => ticketModel
        .insertMany([{
            gameId,
            row_1: ticket[0],
            row_2: ticket[1],
            row_3: ticket[2],
        },
        ], (error, result,) => {
            if (error) {
                return reject(error,);
            }
            return resolve(result[0],);
        },),);
}

/**
 * get ticket using ticket id
 * @returns {Promise} - resolve with data or reject with error
 */
function getTicket(ticketId,) {
    return new Promise((resolve, reject,) => ticketModel
        .aggregate([
            {
                $match: { _id: mongoose.Types.ObjectId(ticketId,), },
            },
            {
                $project: {
                    _id: 0,
                    row_1: 1,
                    row_2: 1,
                    row_3: 1,
                },
            },
        ], (error, result,) => {
            if (error) {
                return reject(error,);
            }
            return resolve(result[0],);
        },),);
}
module.exports = { saveTicket, getTicket, };
