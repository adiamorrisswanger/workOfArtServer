const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: '',
    },
    username: {
        type: String,
        unique: true,
        default: '',
    },
    password: {
        type: String,
        select: false,
        default: '',
    },
    emailAddress: {
        type: String,
        default: '',
    },
    organization: {
        type: String,
        default: '',
    },
    referred: {
        type: String,
    },
    admin: {
        type: Boolean,
        default: false
    }
});



userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);