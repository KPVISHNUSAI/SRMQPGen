const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Route for user login
// Route for user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ 
            id: user.id,
            email: user.email,
            roleId: user.roleId // Include roleId in the payload
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        

        // Set the token as a cookie
        res.cookie('authToken', token, { httpOnly: true, secure: true, sameSite: 'none' }).json({ 
            username: user.username, 
            email: user.email,
            roleId: user.roleId,
            token: token 
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Route for user signup
router.post('/signup', async (req, res) => {
    const { email, password, username, roleId } = req.body;

    try {
        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            email,
            username, // Add username field
            roleId, // Add roleId field
            password: hashedPassword // Save the hashed password
        });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Route for user logout
router.post('/logout', (req, res) => {
    // Clear the authentication cookie
    res.clearCookie('authToken').json({ message: 'Logout successful' });
});

module.exports = router;
