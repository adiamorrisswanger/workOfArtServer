const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    unitNumber: {
        type: Number,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: false,
        unique: true
    },
   /*  image: {
        data: Buffer,
        type: String,
    } */

}, {
    timestamps: true
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;