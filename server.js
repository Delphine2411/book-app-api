


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

// Connecter à la base de données MongoDB
mongoose.connect('mongodb+srv://kpankpand:Delphine@cluster0.87grh.mongodb.net/app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.log('Erreur de connexion à MongoDB:', err));

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
