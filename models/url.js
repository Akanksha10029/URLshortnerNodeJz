const mongoose = require('mongoose');

//schema
const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true, 
        unique: true,
    },

    redirectUrl:{
        type: String,
        required: true,
    },

    visitHistory:[{
        timestamp: {type: Date, default: Date.now}
    }]
},{timestamps: true});

//model creation
const URL = mongoose.model('URL', urlSchema);

module.exports = URL;