const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        data: Buffer,
        type: String,
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    featured: false
    /* url: {
        type: String,
        required: false,
        unique: true
    } */
    
}, {
    timestamps: true
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;