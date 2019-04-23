const mongoose = require('mongoose')

const Weather = mongoose.model('Weather', {
    temperature: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Weather