import React from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuthenticated, logout } from "../../api/api";
import "./index.css";

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <header className="navbar">
      <nav>
        <ul className="navlist">
          <li >
            <Link className="nav-element" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-element" to="/questions">Set Paper</Link>
          </li>
          <li>
            {isAuthenticated() ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
