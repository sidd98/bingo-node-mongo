const express = require('express',);

const showTicket = require('./showticket',);

const router = express.Router();

router.get('/:ticket_id', showTicket.get,);

module.exports = router;
