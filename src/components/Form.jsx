import React, { useState } from 'react'
import Button from './Button/Button'
import './Form.css'

function Form() {

  //States

  const [formData, setFormData] = useState({ name: '', email: '', telephone: '', subject: '', comment: '', })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  //Function to handle change

  const handleChange = (e) => {

    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

  }

  // Form validation 

  const validateForm = () => {

    const newErrors = {}

    if ((!/^[A-Öa-ö\s\-]{2,}$/.test(formData.name)) || (formData.name === '')) {
      newErrors.name = true
    }

    if ((!/^[A-Öa-ö\s\-,]{2,}$/.test(formData.subject)) || (formData.subject === '')) {
      newErrors.subject = true
    }

    if ((!/^[A-Öa-ö\s\-,]{5,}$/.test(formData.comment)) || (formData.comment === '')) {
      newErrors.comment = true
    }

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
      newErrors.email = true
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0

  }

  //Function to handle submit

  const handleSubmit = async (e) => {
    e.preventDefault()


    if (!validateForm()) {
      return
    }

    //Send form data to API / POST request

    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {

      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

    })

    console.log(formData)

    // Set submitted to true if response is ok

    if (res.ok) {

      const data = await res.text()
      console.log('Formulär skickat. API svar:', data)

      setSubmitted(true)
      setFormData({ name: '', email: '', telephone: '', subject: '', comment: '', })

    } else {
      const errorData = await res.text()
      console.log('Något blev fel', errorData)
    }
  }

  //Output-message when form is submitted

  if (submitted) {
    return (

      <div id="submit-message">
        <h2>
          Thank you for contacting us!
        </h2>
        <p>We will return to you within 2-3 days.</p>

        <button type="button" id="form-btn" onClick={() => setSubmitted(false)} >OK</button>

      </div>
    )
  }


  return (

    <form onSubmit={handleSubmit} noValidate className="contact-form">

      <div className="input-group">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}
          className={`form-input ${errors.name ? 'error' : ''}`}
          placeholder="Your Name" required />

      </div>

      <div id="form-row">
        <div className="input-group">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`} placeholder="Email" required />

        </div>

        <div className='input-group' >
          <label htmlFor="telephone" className="form-label">Telephone</label>
          <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} className="form-input" placeholder="Telephone" />

        </div>
      </div>

      <div className="input-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange}
          className={`form-input ${errors.subject ? 'error' : ''}`} placeholder="How can we help you" required />

      </div>

      <div className="input-group">
        <label htmlFor="comment">Comments/Questions</label>
        <textarea name="comment" value={formData.comment} onChange={handleChange}
          className={`form-input ${errors.comment ? 'error' : ''}`} rows={8} placeholder="Comment" required />

      </div>

      <Button id="submit-btn">Submit</Button>
    </form>

  )
}

export default Form