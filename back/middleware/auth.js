const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const Bearer = req.headers.authorization.split(' ')[1];
        req.token = jwt.verify(Bearer ,'${process.env.TOKEN}');
        next();
    } catch (error){
        res.status(401).json({error : error})
    }
};