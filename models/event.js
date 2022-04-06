const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    
    name: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    featured: false,
    description: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;