// src/components/Users/UserForm.js
import React, { useState } from 'react';
import { createUser } from '../../api/api';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, email, password, roleId };
      await createUser(userData);
      // Optionally, reset the form or display a success message
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={roleId}
          onChange={(e) => setRoleId(e.target.value)}
          placeholder="Role ID"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default UserForm;
