const express = require('express');
const authorController = require('../controllers/authorController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware.authenticateJWT, authorController.putAuthor);
router.get('/', authorController.getAuthors);
router.put('/:id', authMiddleware.authenticateJWT, authorController.putAuthor);
router.delete('/:id', authMiddleware.authenticateJWT, authorController.deleteAuthor);


module.exports = router;

