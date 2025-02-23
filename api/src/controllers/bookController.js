const Book = require('../models/Book');

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'bookNotFoundError' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'bookNotFoundError' });
        }
        await book.update(req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'bookNotFoundError' });
        }
        await book.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBooksByGenre = async (req, res) => {
    try {
        const { genre } = req.query;
        const books = await Book.findAll({
            where: {
                genre: genre
            }
        });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllGenres = async (req, res) => {
    try {
        const genres = await Book.findAll({
            attributes: ['genre'],
            group: ['genre'],
            raw: true
        });

        const uniqueGenres = genres.map(g => g.genre);

        res.status(200).json(uniqueGenres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};