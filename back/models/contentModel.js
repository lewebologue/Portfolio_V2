const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    stack: { type: Array, required: false },
    url: { type: String, required: false },
});

module.exports = mongoose.model('Content', contentSchema);