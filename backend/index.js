const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library
const result = require('dotenv').config();
const app = express();
if (result.error) {
    console.error("Error loading .env file:", result.error);
}


// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow credentials
  }));
app.use(cookieParser());

// Middleware to authenticate users and attach user information to the request object
function authenticateUser(req, res, next) {
    const authToken = req.cookies.authToken;
    console.log(`################# Auth Token ${authToken} ######################`);
    if (!authToken) {
        return res.status(401).json({ message: 'Unauthorized - Missing authentication token' });
    }
    
    try {
        // Verify the JWT token and decode its payload
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
        // Ensure that the decoded payload contains the roleId property
        console.log(`##############     Decoded Role ${decoded.roleId}    ################`);
        if (!decoded.roleId) {
            throw new Error('Role ID not found in token payload');
        }
        // Attach user information to the request object
        req.user = decoded;
        // Call next middleware or route handler
        next();
    } catch (error) {
        console.error('Error verifying authentication token:', error);
        return res.status(401).json({ message: 'Unauthorized - Invalid authentication token' });
    }
}



//Routes
const userRoutes = require('./routes/user');
const roleRoutes = require('./routes/role');
const questionRoutes = require('./routes/question');
const authRoutes = require('./routes/auth');

// Define your routes here
app.use('/auth' , authRoutes);
app.use('/users', authenticateUser, userRoutes);
app.use('/roles', authenticateUser, roleRoutes);
app.use('/questions', authenticateUser, questionRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
