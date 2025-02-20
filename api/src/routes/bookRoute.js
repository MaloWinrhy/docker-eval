const express = require('express');

const router = express.Router();
const {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    getBooksByGenre,
    getAllGenres
} = require('../controllers/bookController');

router.post('/', createBook);
router.get('/', getBooksByGenre);
router.get('/genre', getAllGenres);
router.get('/list', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;