import React from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating({ rating }) {

    const maxStars = 5
    let filledStars = rating

    const stars = []

    for (let i = 0; i < maxStars; i++) {
        if (i < filledStars) {
            stars.push('★')
        } else stars.push('☆')
    }


    return (
        <>
            {stars.join('')}

        </>

    )
}

export default StarRating