const Form = require('../models/formModel');
const mongoose = require('mongoose');

exports.newContactForm = (req, res, next) => {
    const form = new Form({
        _id: new mongoose.Types.ObjectId(),
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        company : req.body.company,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message
    });
    form.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Form Submitted',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};