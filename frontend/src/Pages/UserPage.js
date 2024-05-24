// src/pages/UserPage.js
import React from 'react';
import UserList from '../components/Users/UserList';
import UserForm from '../components/Users/UserForm';
import Header from '../components/Header';

const UserPage = () => {
  return (
    <div>
      <Header />
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserPage;
