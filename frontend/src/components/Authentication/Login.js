// src/components/Auth/Login.js
import React, { useState } from 'react';
import { login } from '../../api/api';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Auth.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleLogin = async (e) => {
    
    e.preventDefault();
    try {
      const response = await login({ email, password }); // Pass isAdmin to the login function
      console.log(response.data);
      Cookies.set('token', response.data.token, { expires: 1 });
      history.replace('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='onboarding'>

      <h1 className='heading'>SRM Question Paper Generator</h1>
      <form className='auth-form' onSubmit={handleLogin}>
        <label htmlFor='uemail'><b>Email</b></label>
        <input
          type="email"
          className='input-box'
          id='uemail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
        <label htmlFor='upass'><b>Password</b></label>
        <input
          type="password"
          className='input-box'
          id='upass'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />
        <button className='auth-button' type="submit">Login</button>
        <Link to="/register">not yet register</Link>
      </form>
      
    </div>
  );
};

export default Login;
