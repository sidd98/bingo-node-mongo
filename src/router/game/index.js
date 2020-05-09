const express = require('express',);
const game = require('./creategame',);
const pickNumber = require('./picknumber',);
const getUsedNumbers = require('./getusednumbers',);
const gameStatus = require('./gamestatus',);
const generateTicket = require('./getticket',);

const router = express.Router();

// create a new game
router.post('/create', game.createGame,);

// generate random number
router.get('/:game_id/number/random', pickNumber.getRandomNumber,);

// get all picked number for a game
router.get('/:game_id/numbers', getUsedNumbers.get,);

// get game status
router.get('/:game_id/stats', gameStatus.get,);

// generate ticket
router.post('/:game_id/ticket/:user_name/generate', generateTicket.post,);


module.exports = router;
