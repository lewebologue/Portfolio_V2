const express = require('express');
const router = express.Router();

const contentController = require('../controllers/content');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', contentController.getAllElements);
router.get('/:id', contentController.getOneElement);
router.post('/new', auth, multer, contentController.createElement);
router.put('/edit/:id', auth, multer, contentController.modifyElement);
router.delete('/:id', auth, contentController.deleteElement);

module.exports = router;