const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { register, login } = require('../controllers/userController');
require('dotenv').config();

const router = express.Router();

// Inscription
router.post('/register', register);

// Connexion
router.post('/login', login);

module.exports = router;


