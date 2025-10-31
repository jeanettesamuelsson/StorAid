import React, { useState } from 'react'
import './Accordion.css'

function Accordion({ title, description }) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleAccordion = () => {
        setIsOpen(!isOpen)

    }


    return (

        <div className="faq-card">
            <div className={`accordion ${isOpen ? 'active' : ''} `} onClick={toggleAccordion}>
                <p>{title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>

            </div>

            <div className={`answer ${isOpen ? 'active' : ''} `}>
                <p> {description}</p>
            </div>


        </div>
    )
}

export default Accordion