const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    url: { type: String, required: true },
});

module.exports = mongoose.model('Content', contentSchema);