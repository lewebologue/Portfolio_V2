const express = require('express');
const router = express.Router();

const formController = require('../controllers/contactForm');

router.post('/', formController.newContactForm);

module.exports = router;