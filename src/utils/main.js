const { gameModels, } = require('../modules/game',);
exports.getUsedNumber = async (game_id,) => {
    const data = await gameModels.getUsedNumbers(game_id,);
    let pickedNumbers = [];
    if (data !== undefined) {
        pickedNumbers = await data.randomNumbers.filter((value,) => {
            if (data.index > 0) {
                data.index -= 1;
                return value;
            }
        },);
    }
    return pickedNumbers;
};
