const mongoose = require('mongoose',);

const schema = mongoose.Schema({

    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
    },
    row_1: {
        type: [Number,
        ],
    },
    row_2: {
        type: [Number,
        ],
    },
    row_3: {
        type: [Number,
        ],
    },
},);
module.exports = mongoose.model('Ticket', schema, 'Ticket',);
