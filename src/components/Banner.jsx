import React from 'react'
import Button from './Button/Button'
import './Banner.css'

function Banner() {
  return (
    <section id="banner">
        <div id="banner-wrapper">
        <h2 className="H3">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

        <Button className="banner-btn">Book Now</Button>
        </div>
    </section>
  )
}

export default Banner