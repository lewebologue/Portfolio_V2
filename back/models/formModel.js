const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    company : { type: String, required: false },
    phone: { type: String, required: false },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', contactSchema);