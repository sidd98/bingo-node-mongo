const express = require('express',);

const router = express.Router();

router.use('/game', require('./game/index',),);

router.use('/ticket', require('./ticket/index',),);

module.exports = router;
