const express = require('express');

const router = express.Router();
const {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    getBooksByGenre
} = require('../controllers/bookController');

router.post('/', createBook);
router.get('/', getBooksByGenre);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;