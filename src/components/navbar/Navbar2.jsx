import React from 'react';
import './Navbar2.css'
import { Link } from 'react-router-dom';
// import scc from '../../svgs/arrow.svg';

const Navbar2 = () => {

    return(
        <nav className="navbar">
           <ul className="navbar-nav">
               <li className="logo">
                   <Link to="/" className="nav-link">
                       <span className="link-text">Gaurav Goyal</span>
                       <h3 className="fa-secondary fa-primary">G</h3>
                   </Link>
               </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <h3 className="fa-secondary fa-primary">H</h3>
                        <span className="link-text">Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-link">
                        <h3 className="fa-secondary fa-primary">P</h3>
                        <span className="link-text">Projects</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/blogs" className="nav-link">
                        <h3 className="fa-secondary fa-primary">B</h3>
                        <span className="link-text">Blogs</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        <h3 className="fa-secondary fa-primary">A</h3>
                        <span className="link-text">About</span>
                    </Link>
                </li>
           </ul>
        </nav>
    )
}

export default Navbar2;