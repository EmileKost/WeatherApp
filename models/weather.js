
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    location: {
        type: String,
        required: false
    },
})

const Weather = mongoose.model('Weather', weatherSchema);
module.exports = Weather;