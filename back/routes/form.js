const express = require('express');
const router = express.Router();

const formController = require('../controllers/contactForm');

const auth = require('../middleware/auth');

router.post('/newForm', formController.newContactForm);
router.get('/', auth, formController.getAllForm);
router.get('/:id', auth, formController.getOneForm);

module.exports = router;