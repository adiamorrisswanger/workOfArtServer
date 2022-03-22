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
    email: {
        type: String,
        required: true,
        unique: true
    },
    tel: {
        type: Number,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: false,
        unique: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;