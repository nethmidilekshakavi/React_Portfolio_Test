import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar = () => (



    <nav>
            <h2>Nethmi Dileksha 🧑‍💻</h2>
        <Link to="/">Home</Link>
        <Link to="/aboutMe">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
    </nav>



);

export default Navbar;
