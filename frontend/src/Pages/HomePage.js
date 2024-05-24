// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { currentUser } from '../api/api';
import Header from '../components/Header';

const HomePage = () => {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    const fetchCurrentUser = async () => {
      try {
        const response = await currentUser();
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching current user:', err);
      }
    };

    fetchCurrentUser();
  }, []);
  
  return (
    <div>
      <Header />
      <h1>Welcome to the Question Paper Generator</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default HomePage;
