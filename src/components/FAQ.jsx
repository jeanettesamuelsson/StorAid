import React, { useState, useEffect } from 'react'
import './FAQ.css'
import Accordion from './Accordion'

function FAQ() {

    //Add state

    const [accordions, setAccordions] = useState([])

    //Function to fetch data from API

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
            const data = await res.json()

            setAccordions(data)
        }

        fetchData()
    }, [])

    return (

        <section id="FAQ">
            <div id="faq-text">
                <p className="H4">FAQ:s</p>
                <h3 className="H3">Frequently Asked Questions</h3>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>

            </div>

            <div id="accordion-container">

                {
                    accordions.map(accordion => (
                        <Accordion
                            key={accordion.id}
                            title={accordion.title}
                            description={accordion.description} />
                    ))
                }

            </div>
        </section>
    )
}

export default FAQ