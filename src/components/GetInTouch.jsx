import React from 'react'
import Form from './Form'
import GreyImg from './Bg-ImgWhyUs.svg'
import './GetInTouch.css'


function GetInTouch() {
  return (
    <section id="GetInTouch">

        <div>

        <h4 className="H4">Get in Touch</h4>

        <h3 className="H3">Get Personalized Assistance - Contact Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>

        <img src={GreyImg} alt="" />

        </div>

        <Form />
    
    </section>
  )
}

export default GetInTouch