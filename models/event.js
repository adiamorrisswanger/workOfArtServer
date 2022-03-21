const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    tite: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

const Unit = mongoose.model('Event', eventSchema);

module.exports = Event;