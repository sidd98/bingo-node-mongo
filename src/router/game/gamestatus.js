const { gameModels, } = require('../../modules/game',);
const helper = require('../../utils/main',);
exports.get = async (req, res,) => {
    const response = {};
    const { game_id, } = req.params;

    response.usersAndTickets = await gameModels.getStatus(game_id,);

    if (response.usersAndTickets === undefined) {
        return res.status(404,).send({
            Message: 'Game not found',
        },);
    }
    response.numbersDrawn = await helper.getUsedNumber(game_id,);

    return res.status(200,).send({
        GameDetail: response,
    },);
};
