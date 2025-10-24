import React from 'react'
import Button from './Button/Button'
import './Form.css'

function Form() {
  return (


    <form className="contact-form">

      <div className="input-group">
        <label htmlFor="firstName" className="form-label">Your Name</label>
        <input type="text" id="firstName" className="form-input" placeholder="Your Name" required />
        <p className="invalid-input">Error msg</p>
      </div>


    <div id="form-row">
      <div className="input-group">
        <label htmlFor="email" className="form-label">E-mail</label>
        <input type="email" id="email" className="form-input" placeholder="Email" required />
        <p className="invalid-input">Error msg</p>
      </div>

      <div className="input-group">
        <label htmlFor="telephone" className="form-label">Telephone</label>
        <input type="text" id="telephone" className="form-input" placeholder="Telephone" />
        <p className="invalid-input">Error msg</p>
      </div>
      </div>

      <div className="input-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" id="subject" className="form-input" placeholder="How can we help you" required />
        <p className="invalid-input">Error msg</p>
      </div>

      <div className="input-group">
        <label htmlFor="comments">Comments/Questions</label>
        <textarea id="comments" className="form-input" rows={8} placeholder="Comments" required />
        <p className="invalid-input">Error msg</p>
      </div>

      <Button id="submit-btn">Submit</Button>
    </form>
    
  )
}

export default Form