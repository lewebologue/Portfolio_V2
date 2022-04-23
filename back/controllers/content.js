const mongoose = require('mongoose');
const Content = require('../models/contentModel');
const fs = require('fs');

//Nouvel element
exports.createElement = (req, res, next) => {
    const elementObject = JSON.parse(req.body.content);
    delete elementObject._id;
    const element = new Content({
        ...elementObject,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    element.save()
        .then(() => res.status(201).json({ message: 'Element created',}))
        .catch((error) => res.status(403).json({error: error, message: "Unsuffisant permissions"}));
};

exports.modifyElement = (req, res, next) => {
    Content.findOne({ _id: req.params.id })
        .then(content => {
            if (content.userId === req.token.userId) {
                const contentObject = req.file ?
                    {
                        ...JSON.parse(req.body.content),
                        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                    } : { ...req.body };
                Content.updateOne({ _id: req.params.id }, { ...contentObject, _id: req.params.id })
                    .then(() => res.status(201).json({ message: 'Sauce mofifiée !' }))
                    .catch((error) => res.status(400).json({ error: error }));
            } else {
                return res.status(403).json({ error: 'Unsuffisant permissions' });
            }
        })
        .catch((error) => res.status(500).json({ error: error }));
};