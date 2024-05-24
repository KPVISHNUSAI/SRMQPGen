import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated, logout } from '../../api/api';

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    logout(); // Clear authentication token
    history.push('/login'); // Redirect to login page after logout
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/questions">Profile</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div>
        {isAuthenticated() ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
