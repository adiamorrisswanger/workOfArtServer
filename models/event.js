const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true,
    },
    featured: false,
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;