import React from 'react'
import StoraidLogo from '../Images/Logo.svg'
import './Nav.css';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>

        <div>
            <img src={StoraidLogo} alt="StorAid-logo" />
        </div>

        <div id="nav-links">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        </div>

        <div>
            <Button>Book Now</Button>
        </div>
    </nav>
  )
}

export default Nav