const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Vérifier si tous les champs sont remplis
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires." });
        }

        console.log("Données reçues pour inscription :", { username, email, password });

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Mot de passe hashé :", hashedPassword);

        // Création et sauvegarde de l'utilisateur
        const user = new User({ username, email, password: hashedPassword });

        console.log("Avant sauvegarde :", user);
        await user.save();
        console.log("Utilisateur enregistré avec succès :", user);

        res.status(201).json({ message: "Utilisateur créé avec succès", userId: user._id });
    
        
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier si les champs sont remplis
        if (!email || !password) {
            return res.status(400).json({ message: "Email et mot de passe sont requis." });
        }

        console.log("Tentative de connexion avec :", { email, password });

        // Vérifier si l'utilisateur existe
        const user = await User.findOne({ email });
        if (!user) {
            console.log("Utilisateur non trouvé !");
            return res.status(400).json({ message: "Utilisateur non trouvé." });
        }

        console.log("Utilisateur trouvé :", user);

        // Vérifier si le mot de passe est correct
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Résultat bcrypt.compare :", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: "Mot de passe incorrect." });
        }

        // Génération du token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("Token généré :", token);

        res.json({ message: "Connexion réussie !", token });
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
};
