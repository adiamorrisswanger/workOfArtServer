const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lasttName: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: Number,
        required: false,
        unique: false
    },
    /* image: {
        data: Buffer,
        type: String,
    } */
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;