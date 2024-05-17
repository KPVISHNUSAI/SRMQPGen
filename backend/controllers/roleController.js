const db = require('../models/index');

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await db.Role.findAll();
        res.json(roles);
    } catch (error) {
        console.error('Error fetching roles:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await db.Role.findByPk(id);
        if (role) {
            res.json(role);
        } else {
            res.status(404).json({ message: 'Role not found' });
        }
    } catch (error) {
        console.error('Error fetching role:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createRole = async (req, res) => {
    const roleData = req.body;
    try {
        const newRole = await db.Role.create(roleData);
        res.status(201).json(newRole);
    } catch (error) {
        console.error('Error creating role:', error);
        res.status(500).json({ message: 'Failed to create role' });
    }
};

exports.updateRole = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const role = await db.Role.findByPk(id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        await role.update(updatedData);
        res.json(role);
    } catch (error) {
        console.error('Error updating role:', error);
        res.status(500).json({ message: 'Failed to update role' });
    }
};


exports.deleteRole = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await db.Role.findByPk(id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        await role.destroy();
        res.json({ message: 'Role deleted successfully' });
    } catch (error) {
        console.error('Error deleting role:', error);
        res.status(500).json({ message: 'Failed to delete role' });
    }
};

