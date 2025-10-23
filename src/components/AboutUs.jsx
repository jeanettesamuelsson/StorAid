import React from 'react'
import './AboutUs.css'
import AboutImg from './aboutus.svg'
import Tile from './Tile'
import Button from './Button/Button'
import PhoneIcon from './PhoneIcon.svg'


function AboutUs() {
  return (
    <section id="about-us">
      <div id="about-content">

        <div>
        <img src={AboutImg} alt="" />

        <div id="about-box">
          <div className="about-item">
            <span className="box-title">12+</span>
            <span>Years Of Experience</span>
          </div>

          <div className="about-item">
            <span className="box-title">150k+</span>
            <span>Satisfied Clients</span>
          </div>

          <div className="about-item">
            <span className="box-title">35+</span>
            <span>Warehouses</span>
          </div>
        </div>
        </div>

        <div id="about-info">
          <div>
            <h3 className="H3">Providing a Safe Space for Your Treasured Items</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
          </div>

          <div className ="tiles" >
          <Tile>
            <p className="H5">Vision</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </Tile>

          <Tile><p className="H5">Mission</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p></Tile>
          </div>

          <div id="about-contact">
            <div>
          <Button>Discover more</Button>
          </div>

          <div id="phone">
          <img src={PhoneIcon} alt="" />

        <div>
          <p className="H5">More information </p>
          <p className="H6">+46 8 123 122 44</p>
          </div>
          </div>
          </div>

        </div>
  
      </div>
    </section>
  )
}

export default AboutUs