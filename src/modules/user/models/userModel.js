const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    gameIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Game'
    },
    ticketIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Ticket'
    }
});
module.exports = mongoose.model('User', schema, 'User');
