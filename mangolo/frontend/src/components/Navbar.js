import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Mangolo
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create Note
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
