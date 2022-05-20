//Modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const contentRoutes = require('./routes/content');
const userRoutes = require('./routes/user');
const formRoutes = require('./routes/form');

const mongoConnect = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.qwua6.mongodb.net/${process.env.DB_NAME}?${process.env.DB_SET}`

mongoose.connect(mongoConnect, { 
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connection established'))
    .catch(() => console.log('Error Connecting to MongoDB'));

const app = express();

//CORS Policy

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/forms', formRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/content', contentRoutes);

module.exports = app;