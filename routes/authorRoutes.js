const express = require('express');
const { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } = require('../controllers/authorController');
const router = express.Router();

router.post('/authors', createAuthor);
router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthorById);
router.put('/authors/:id', updateAuthor);
router.delete('/authors/:id', deleteAuthor);

module.exports = router;


