const Book = require('../models/bookModel');

// Créer un livre
exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Lire tous les livres
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un seul livre
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Livre non trouvé" });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Modifier un livre
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: "Livre non trouvé" });
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: "Livre non trouvé" });
        res.json({ message: "Livre supprimé" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
