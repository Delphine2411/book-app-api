const express = require('express');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware.authenticateJWT, bookController.postBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', authMiddleware.authenticateJWT, bookController.putBook);
router.delete('/:id', authMiddleware.authenticateJWT, bookController.deleteBook);

module.exports = router;
