import React from 'react'
import './Blog.css'

function Blog({ title, description, imageUrl, created }) {

  const blogContent = description.slice(0, 150) + '...'
 


  return (
    <div className="blog-card">

      <img className="blog-img" src={imageUrl} alt="" />

      <p className="blog-created">{created}</p>

      <div className="blog-content">
        <h3 className="H6">{title}</h3>
        <p>{blogContent}</p>
        <a href="#">Read more →</a>
      </div>

    </div>
  )
}

export default Blog