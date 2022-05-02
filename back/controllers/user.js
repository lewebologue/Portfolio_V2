const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AES = require('../middleware/aes-encryption');

exports.signup = (req, res, next) =>{
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({error : 'Formulaire incomplet !'})
    }
    const cryptedMail = AES.encrypt(email);
    User.findOne({email : cryptedMail})
        .then(user => {
            if(user){
                return res.status(406).json({error : 'Email déjà utilisé !'})
            }
            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email : cryptedMail,
                        password : hashedPassword,
                        isAdmin : false
                    });
                    user.save()
                        .then(() => res.status(201).json({message : 'Utilisateur créé !'}))
                        .catch(error => res.status(400).json({error : error}))
                })
                .catch(error => res.status(500).json({error : error}))
        })
        .catch(error => res.status(500).json({error : error}))
};

exports.login = (req, res, next) => {
    const cryptedEmail = AES.encrypt(req.body.email);
    User.findOne({email : cryptedEmail})
        .then(user => {
            if(!user){
                return res.status(401).json({error : 'Utilisateur non trouvé !'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({error : 'Mot de passe incorrect !'})
                    }
                    res.status(200).json({
                        userId: user.id,
                        isAdmin: user.isAdmin,
                        token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin}, 'process.env.TOKEN',{ expiresIn: '24h' }) //Generation du token d'authentification
                    });
                })
                .catch(error => res.status(500).json({error : error}))
        })
        .catch(error => res.status(500).json({error : error}))
};