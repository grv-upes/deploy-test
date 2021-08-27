import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const navStyle = {
        color: 'white'
    }

    return(
        <nav>
            <Link style={navStyle} to="/">
                <h3 className="logo-h3">Gaurav Goyal</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/projects">
                    <li>Projects</li>
                </Link>
                <Link style={navStyle} to="/blogs">
                    <li>Blogs</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;