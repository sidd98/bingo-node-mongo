const _ = require('lodash',);
const { gameModels, } = require('../../modules/game',);

exports.getRandomNumber = async (req, res,) => {
    const { game_id, } = req.params;

    // get random number and also increase index value by 1
    const randomNumber = await gameModels.findNumberByGameId(game_id,);

    if (_.isEmpty(randomNumber,)) {
        res.status(200,).send({
            message: 'Game Over',
        },);
    } else {
        res.status(200,).send(randomNumber,);
    }
};
