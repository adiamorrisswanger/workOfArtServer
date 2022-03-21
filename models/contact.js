const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
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

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;