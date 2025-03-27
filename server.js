const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api', bookRoutes);
app.use('/api', authorRoutes);
app.use('/api', authRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port http://localhost:${PORT}`));
