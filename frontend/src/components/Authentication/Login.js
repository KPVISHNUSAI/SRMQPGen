// src/components/Auth/Login.js
import React, { useState } from 'react';
import { login } from '../../api/api';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <Link to="/register">not yet register</Link>
    </div>
  );
};

export default Login;
