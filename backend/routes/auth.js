const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticateToken');
const User = require('../models/User'); // Update the path as necessary
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user && await bcrypt.compare(password, user.password)) {
//     const token = jwt.sign({ email: user.email, id: user._id }, 'secret', { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(400).send('Invalid credentials');
//   }
// });


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            token,
            user: {
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected route!' });
});
module.exports = router;
