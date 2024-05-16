const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library
const result = require('dotenv').config();
const app = express();
if (result.error) {
    console.error("Error loading .env file:", result.error);
}

const userRoutes = require('./routes/user');
const roleRoutes = require('./routes/role');
const questionRoutes = require('./routes/question');
const authRoutes = require('./routes/auth');



// Middleware
app.use(bodyParser.json());
app.use(cors());

// Middleware to authenticate user using cookies
function authenticateUser(req, res, next) {
    // Check for authentication cookie in request
    const authToken = req.cookies.authToken;
    if (!authToken) {
        return res.status(401).json({ message: 'Unauthorized - Missing authentication token' });
    }
    
    // Verify the authentication token (JWT token)
    try {
        // Verify token using JWT library
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
        req.user = decoded; // Set user information in request object
        next(); // Call next middleware or route handler
    } catch (error) {
        console.error('Error verifying authentication token:', error);
        return res.status(401).json({ message: 'Unauthorized - Invalid authentication token' });
    }
}

// Routes
// Define your routes here
app.use('/auth' ,authRoutes);
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/questions', questionRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
