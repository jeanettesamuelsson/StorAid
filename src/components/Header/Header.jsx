import React from 'react'
import './Header.css';
import FacebookIcon from './Facebook.svg'
import XIcon from './Humble.svg'
import InstagramIcon from './Instagram.svg'
import YoutubeIcon from './Youtube.svg'

function Header() {
  return (
    <header>
        
    <div id ="contacts">

        <span> 📞 +46 8 123 122 44</span>
        <span> 📧 contact@domain.com</span>
        
        </div>

     <div id="links"> 

        <img src={FacebookIcon} alt="Facebook-link" />
        <img src={XIcon} alt="X-link" />
        <img src={InstagramIcon} alt="Instagram-link" />
        <img src={YoutubeIcon} alt="Yotube-link" />
    
        </div>   

    </header>
  )
}

export default Header