const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createUser = async (req, res) => {
    const userData = req.body;
    try {
        const newUser = await User.create(userData);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
};


exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update(updatedData);
        res.json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Failed to update user' });
    }
};


exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Failed to delete user' });
    }
};

