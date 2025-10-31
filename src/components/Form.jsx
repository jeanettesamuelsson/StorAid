import React, { useState } from 'react'
import Button from './Button/Button'
import './Form.css'

function Form() {

  // add states
  const [formData, setFormData] = useState({ name: '', email: '', telephone: '', subject: '', comment: '', })
  const [submitted, setSubmitted] = useState(false)
  


  //function to handle changes in the form. get information from event
  const handleChange = (e) => {

    const {name, value} = e.target

    setFormData({ ...formData, [name]: value })   // (...Spread on formData, updates the value of name, email etc 

  }

  //function to handle submit 

  const handleSubmit = async (e) => {
    e.preventDefault()

    //send to api
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {

      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

    })

    // if results ok, set submitted to true and reset the form 

    if (res.ok) {
      const data = await res.text()
      console.log(data)

      setSubmitted(true)
      setFormData({ name: '', email: '', telephone: '', subject: '', comment: '', })  //reset form


      //If results not ok, show json error message
    } else {
      const data = await res.json()
      console.log(data)
    }

  }

 
    return (

      <form onSubmit={handleSubmit} noValidate className="contact-form">

        <div className="input-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your Name" required />
      
        </div>

        <div id="form-row">
          <div className="input-group">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email" required />
            
          </div>

          <div className="input-group">
            <label htmlFor="telephone" className="form-label">Telephone</label>
            <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} className="form-input" placeholder="Telephone" />
            
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-input" placeholder="How can we help you" required />
          
        </div>

        <div className="input-group">
          <label htmlFor="comment">Comments/Questions</label>
          <textarea name="comment" value={formData.comment} onChange={handleChange} className="form-input" rows={8} placeholder="Comment" required />
          
        </div>

        <Button id="submit-btn">Submit</Button>
      </form>

    )
  }

  export default Form