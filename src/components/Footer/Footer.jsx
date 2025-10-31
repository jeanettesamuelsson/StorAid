import React from 'react'
import './Footer.css';
import Icon from './Icon.svg'

function Footer() {
  return (
    <footer>
      <div>
        <p>© 2025 StorAid, All rights reserved.</p></div>

      <div id="footer-links">
        <div className="footer-link">
          <a href="#"> <img className="footer-icon" src={Icon} alt="click-icon" /></a>
          <p>Terms & Conditions  </p>
        </div>
       <div className="footer-link">
          <a href="#"> <img className="footer-icon" src={Icon} alt="click-icon" /></a>
           <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer