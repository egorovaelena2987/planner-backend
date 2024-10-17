const mongoose = require('mongoose');
const planSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Plan', planSchema);