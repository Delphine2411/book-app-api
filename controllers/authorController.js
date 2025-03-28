const Author = require('../models/authModel');

// Créer un auteur
exports.createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Lire tous les auteurs
exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un auteur par ID
exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ message: "Auteur non trouvé" });
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Modifier un auteur
exports.updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).json({ message: "Auteur non trouvé" });
        res.json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer un auteur
exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).json({ message: "Auteur non trouvé" });
        res.json({ message: "Auteur supprimé" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
