import React from 'react'

function StarRating({ rating }) {

    const maxStars = 5
    
    const stars = [...Array(maxStars)].map((_, i) =>
        i < rating ? '★' : '☆'
    )

    return (
        <>
        {stars}
        </>
    )
}

export default StarRating