const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    name:{
        type: String,
        unique: true
    },
    year: String,
    description: String,
    trailerUrl: String,
    imageUrl: String,
    gender: String,
    status: Number
})

module.exports = mongoose.model('MovieSchema', MovieSchema);

