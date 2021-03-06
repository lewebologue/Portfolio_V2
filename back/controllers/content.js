const Content = require('../models/contentModel');
const fs = require('fs');

//create new element with image
exports.createElement = (req, res, next) => {
    const contentObject = req.body;
    delete contentObject._id;
    const content = new Content({
        ...contentObject,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    content.save()
        .then(() => res.status(201).json({ message: 'Content created successfully' }))
        .catch(error => res.status(400).json({ error }));
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
                    .then(() => res.status(201).json({ message: 'Element updated !' }))
                    .catch((error) => res.status(400).json({ error: error }));
            } else {
                return res.status(403).json({ error: 'Unsuffisant permissions' });
            }
        })
        .catch((error) => res.status(500).json({ error: error }));
};

exports.deleteElement = (req, res, next) =>{
    Content.findOne({_id: req.params.id})
        .then(content =>{
            const filename = content.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
            Content.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Element deleted'}))
                .catch(error => res.status(400).json({ error }));
        });
    })
    .catch(error => res.status(500).json({ error: error }));
};

exports.getAllElements = (req, res, next) => {
    Content.find()
        .then(contents => res.status(200).json(contents))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneElement = (req, res, next) => {
    Content.findOne({ _id: req.params.id })
        .then(content => res.status(200).json(content))
        .catch(error => res.status(400).json({ error }));
};