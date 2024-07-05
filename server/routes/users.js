const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

// Inscription
router.post('/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    console.log('Signup request received', { email, username, password });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'L\'utilisateur existe déjà.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();

    console.log('User created successfully');
    return res.status(201).json({ message: 'Inscription réussie !' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login request received', { email, password });

    const user = await User.findOne({ email });
    if (!user) {
      console.log('Invalid email or password');
      return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid email or password');
      return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
    }

    console.log('User logged in successfully');
    return res.status(200).json({ message: 'Connexion réussie !', user });
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});

module.exports = router;
