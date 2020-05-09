const mongoose = require('mongoose');

const schema = mongoose.Schema({

    users: {
        type: Number,
        default: 0,
    },
    tickets: {
        type: Number,
        default: 0,
    },
    randomNumbers: {
        type: [Number],
    },
    index: {
        type: Number,
        default: 0,
    }
},
{timestamps: true}
);

module.exports = mongoose.model('Game', schema, 'Game');
