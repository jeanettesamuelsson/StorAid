import React, { useState, useEffect } from 'react'
import './Testimonials.css'
import ClientImg from './clientimg.svg'
import TestimonialCard from './TestimonialCard'

function Testimonials() {

    //add state 
    const [testimonialItems, setTestimonialItems] = useState([])


    //function to get data from API
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
            const data = await res.json()

            setTestimonialItems(data)

        }

        fetchData()
    }, [])


    return (
        <section id="testimonials">
            <h3 className="H4">Testimonials</h3>

            <p className="H3">See What Our Clients Have To Say</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

            <div id="cards">

                {testimonialItems.map((item) => (

                <TestimonialCard
                    key={item.id}
                    comment={item.comment}
                    name={item.name}
                    companyName={item.companyName}
                    avatarUrl={item.avatarUrl}
                    rating={item.rating}
                />


            ))}




            </div>

        </section>
    )
}

export default Testimonials