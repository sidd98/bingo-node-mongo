/* eslint-disable no-underscore-dangle */
const { gameModels, } = require('../../modules/game',);


exports.generateNumbers = async () => {
    const arr = [];
    while (arr.length < 90) {
        const r = Math.floor(Math.random() * 90,) + 1;
        if (arr.indexOf(r,) === -1) arr.push(r,);
    }
    return arr;
};

exports.createGame = async (req, res,) => {
    // create a new game
    try {
    // get random numbers between 1 - 90
        const arr = await exports.generateNumbers();

        // database insert operation
        const data = await gameModels.createNewGame(arr,);

        res.status(201,).send({
            Message: 'Successfully created new Game.',
            Detail: {
                _id: data._id,
                Users: data.users,
                Tickets: data.tickets,
            },
        },);
    } catch (err) {
        res.status(500,).send(err,);
    }
};
