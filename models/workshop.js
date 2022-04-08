const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
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
    /* image: {
        data: Buffer,
        type: String,
    }, */
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

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;