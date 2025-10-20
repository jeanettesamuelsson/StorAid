import React from 'react'
import StoraidLogo from '../Images/Logo.svg'
import './Nav.css';
import Button from '../Button/Button';

function Nav() {
  return (
    <nav>

        <div>
            <img src={StoraidLogo} alt="StorAid-logo" />
        </div>

        <div id="nav-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        <div>
            <Button>Book Now</Button>
        </div>
    </nav>
  )
}

export default Nav