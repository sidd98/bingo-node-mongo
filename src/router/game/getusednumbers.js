const helper = require('../../utils/main',);

exports.get = async (req, res,) => {
    try {
        const { game_id, } = req.params;

        // get all number picked for game
        const pickedNumbers = await helper.getUsedNumber(game_id,);
        if (pickedNumbers.length > 0) {
            return res.status(200,).send({
                PickedNumbers: pickedNumbers,
            },);
        }
        res.send({
            Message: 'No number picked yet or check if game exist or not',
        },);
    } catch (err) {
        res.status(500,).send(err,);
    }
};
