import React from 'react'
import './Contact.css'
import Form from '../../Form'
import GetInTouch from '../../GetInTouch'
import FindUs from '../../FindUs'

function Contact() {
  return (
    <>
     <section id="hero">
      <div id="hero-text">
        <p className="H1">Contact Us</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

      </div>
    </section>

    <GetInTouch />
    <FindUs />

    </>
  )
}

export default Contact