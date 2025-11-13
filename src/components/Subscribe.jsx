import React from 'react'
import Button from './Button/Button'
import './Subscribe.css'

function Subscribe() {
  return (
    <section id="subscribe">
        <div id="subscribe-text">
            <p className="H3">Subscribe To Our Newsletter</p>
            <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
        </div>

        <div id="input-wrapper">
            <input placeholder ="Enter your email" type="text" />
            <Button>Submit</Button>
        </div>

    </section>
  )
}

export default Subscribe