// src/components/Auth/Register.js
import React, { useState } from 'react';
import { register } from '../../api/api';
import { Link } from 'react-router-dom';
import './Auth.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const roleId = 2;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      const response = await register({ username, email, password, roleId});
      console.log('Registration successful:', response.data);

    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='onboarding'>
      <h1 className='heading'>SRM Question Paper Generator</h1>
      <form className='auth-form' onSubmit={handleRegister}>
      <label htmlFor='uname'><b>Username</b></label>
        <input
          type="text"
          id='uname'
          className='input-box'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          className='input-box'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className='input-box'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className='input-box'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className='auth-button' type="submit">Register</button>
        <Link to="/login">Already registered? Login</Link>
      </form>
      
    </div>
  );
};

export default Register;
