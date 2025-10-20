import React from 'react'
import './Footer.css';
import Icon from './Icon.svg'

function Footer() {
  return (
    <footer>
        <div>
            <p>© 2025 StorAid, All rights reserved.</p></div>
    
        <div id ="footer-links">
        <a href="#"> <img src={Icon} alt="click-icon" /></a> <span>Terms & Conditions  </span>
        <a href="#"> <img src={Icon} alt="click-icon" /></a> <span>Privacy Policy</span> 
        </div>
    </footer>
  )
}

export default Footer