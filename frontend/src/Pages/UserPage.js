// src/pages/UserPage.js
import React from 'react';
import UserList from '../components/Users/UserList';
import UserForm from '../components/Users/UserForm';

const UserPage = () => {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserPage;
