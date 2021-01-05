import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
    const navStyle = {
        color: 'white',

    };
  return (
    <nav>
        <Link style={navStyle} to="/">
                <h1 className="name">Kobii Hoyos-Watkins</h1>
            </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/Portfolio">
                <li>Portfolio</li>
            </Link>
            <Link style={navStyle} to="/Contact">
                <li>Contact</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;