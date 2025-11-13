import React, { useState, useEffect } from 'react'
import './Testimonials.css'
import ClientImg from './clientimg.svg'
import TestimonialCard from './TestimonialCard'
import Testimonialsbg from './testimonials-bg.svg'

function Testimonials() {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
            const data = await res.json()

            setTestimonials(data)
        }

        fetchData()
    }, [])


    return (
        <section id="testimonials">
            <h3 className="H4">Testimonials</h3>

            <p className="H3">See What Our Clients Have To Say</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

            <div id="cards">

                {testimonials.map((testimonial) => (

                    <TestimonialCard
                        key={testimonial.id}
                        comment={testimonial.comment}
                        name={testimonial.name}
                        companyName={testimonial.companyName}
                        avatarUrl={testimonial.avatarUrl}
                        rating={testimonial.rating}
                    />
                ))}

            </div>

        </section>
    )
}

export default Testimonials