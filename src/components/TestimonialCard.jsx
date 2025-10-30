import React from 'react'
import './TestimonialCard.css'
import QuoteImg from './clientquote.svg'
import StarRating from './StarRating'

function TestimonialCard({comment, name, companyName, avatarUrl, rating}) {
    return (

        <div className="card">
            <div className="rate">
                
                <p className="H5"> <StarRating rating = {rating} />  </p>
                <p>{comment}</p>
            </div>

            <div className="customer">
                <img className="avatar" src={avatarUrl} alt="" />
                <div className="customer-name">
                    <p  className="H6">{name}</p>
                    <p>{companyName}</p>
                </div>
                <img src={QuoteImg} alt="" />

            </div>
            </div>
    )
}

export default TestimonialCard