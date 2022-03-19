const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        default: '',
        required: false
    },
    lastName: {
        type: String,
        default: '',
        required: false
    },
    emailAddress: {
        type: String,
        default: '',
        required: false
    },
    organization: {
        type: String,
        default: '',
        required: false
    },
    referred: {
        type: String,
        required: false
    },
    admin: {
        type: Boolean,
        default: false
    }
});



userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);