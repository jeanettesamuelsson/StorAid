import React from 'react'
import { useState, useEffect } from 'react'
import WhyUs from '../../WhyUs'
import Banner from '../../Banner'
import FAQ from '../../FAQ'
import Form from '../../Form'
import GetInTouch from '../../GetInTouch'
import Button from '../../Button/Button'
import './Booking.css'


function Booking() {

    const [formData, setFormData] = useState({ name: '', email: '', selectedUnit: '', purpose: '', })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})


    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }


    const validateForm = () => {

        const newErrors = {}

        if ((!/^[A-Öa-ö\s\-]{2,}$/.test(formData.name)) || (formData.name === '')) {
            newErrors.name = true
        }

        if ((!/^[A-Öa-ö\s\-,]{2,}$/.test(formData.selectedUnit)) || (formData.selectedUnit === '')) {
            newErrors.selectedUnit = true
        }

        if ((!/^[A-Öa-ö\s\-,]{5,}$/.test(formData.purpose)) || (formData.purpose === '')) {
            newErrors.purpose = true
        }

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = true
        }

        setErrors(newErrors)                  //Set new error to Errors
        return Object.keys(newErrors).length === 0         //returns true if none of the statements is true 

    }


    const handleSubmit = async (e) => {
        e.preventDefault()


        if (!validateForm()) {
            return
        }


        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {

            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })

        console.log(formData)


        if (res.ok) {

            const data = await res.text()
            console.log('Formulär skickat. API svar:', data)

            setSubmitted(true)
            setFormData({ name: '', email: '', selectedUnit: '', purpose: '', })  //reset form


            //If results not ok, show json error message or text
        } else {
            const errorData = await res.text()
            console.log('Något blev fel', errorData)
        }
    }


    return (
        <>
            <section id="hero">
                <div id="hero-text">
                    <p className="H1">Booking</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                </div>
            </section>


            <section id="booking">

                <div id="booking-info">
                    <p className="H4">Booking Unit </p>
                    <p className="H3">Book Your Storage Unit Now & Simplify Your Life!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
                    </p>
                </div>

                <div>

                    {submitted ? (
                        <div id="submit-message">
                            <h2>
                                Thank you for contacting us!
                            </h2>
                            <p>We have received your booking request and will respond to you within 1-2 business days.</p>

                            <button type="button" id="form-btn" onClick={() => setSubmitted(false)} >OK</button>
                        </div>

                    ) : (

                        <form onSubmit={handleSubmit} noValidate className="booking-form">


                            <div id="form-row">
                                <div className='input-group' >
                                    <label htmlFor="name" className="form-label">Your name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your name" required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                                        className={`form-input ${errors.email ? 'error' : ''}`} placeholder="Email" required />

                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="selectedUnit" className="form-label">Unit</label>
                                <input type="text" name="selectedUnit" value={formData.selectedUnit} onChange={handleChange}
                                    className={`form-input ${errors.selectedUnit ? 'error' : ''}`} placeholder="Select a unit" required />

                            </div>

                            <div className="input-group">
                                <label htmlFor="comment">Storage purpose</label>
                                <textarea name="purpose" value={formData.purpose} onChange={handleChange}
                                    className={`form-input ${errors.purpose ? 'error' : ''}`} rows={8} placeholder="Describe your storage purpose so that we can match your request" required />
                            </div>

                            <Button >Submit</Button>
                        </form>
                    )}
                </div>
            </section>

            <WhyUs />
            <Banner />
            <FAQ />
            
        </>
    )
}

export default Booking