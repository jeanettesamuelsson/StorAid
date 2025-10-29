import React, { useState } from 'react'
import Button from './Button/Button'
import './Form.css'

function Form() {

  // add states
  const [formData, setFormData] = useState({ name: '', email: '', telephone: '', subject: '', comment: '', })
  const [submitted, setSubmitted] = useState(false)
  


  //function to handle changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })          // (...Spread on formData, to set a new object

  }

  //function to handle submit 

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {

      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

    })

    // if results ok, set submitted to true, and reset the form 

    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', telephone: '', subject: '', comment: '', })  //reset form

    }

  }

 
    return (

      <form onSubmit={handleSubmit} noValidate className="contact-form">

        <div className="input-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" className="form-input" placeholder="Your Name" required />
      
        </div>

        <div id="form-row">
          <div className="input-group">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="form-input" placeholder="Email" required />
            
          </div>

          <div className="input-group">
            <label htmlFor="telephone" className="form-label">Telephone</label>
            <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} id="telephone" className="form-input" placeholder="Telephone" />
            
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} id="subject" className="form-input" placeholder="How can we help you" required />
          
        </div>

        <div className="input-group">
          <label htmlFor="comment">Comments/Questions</label>
          <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} className="form-input" rows={8} placeholder="Comment" required />
          
        </div>

        <Button id="submit-btn">Submit</Button>
      </form>

    )
  }

  export default Form