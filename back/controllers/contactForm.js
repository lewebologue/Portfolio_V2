const Form = require('../models/formModel');
const mongoose = require('mongoose');

exports.newContactForm = (req, res, next) =>{
    const formObject = req.body.form;
    delete formObject._id;
    const form = new Form({
        ...formObject,
    })
    form.save()
        .then(() => res.status(201).json({ message: 'Form created',}))
        .catch((error) => res.status(403).json({error: error, message: "Unsuffisant permissions"}));
};

exports.getAllForm = (req,res, next) =>{
    Form.find()
        .then((Forms)=> {res.status(200).json(Forms)})
        .catch((error)=> {res.status(404).json({error: error});
    })
};

exports.getOneForm = (req, res, next) =>{
    Form.findOne({_id: req.params.id})
        .then((form) => {res.status(200).json(form)})
        .catch((error) => {res.stauts(404).json({error: error});
    })
};