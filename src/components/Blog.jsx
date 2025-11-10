import React from 'react'
import './Blog.css'

function Blog({ title, description, imageUrl, created }) {

  const blogContent = description.slice(0, 150) + '...'

  let dateCreated = created.slice(0, 10);           
  dateCreated = new Date(dateCreated);      

  const formattedDate = dateCreated.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  console.log(formattedDate);


  return (
    <div className="blog-card">

      <img className="blog-img" src={imageUrl} alt="" />

      <p className="blog-created">{formattedDate}</p>

      <div className="blog-content">
        <h3 className="H6">{title}</h3>
        <p>{blogContent}</p>
        <a href="#">Read more →</a>
      </div>

    </div>
  )
}

export default Blog