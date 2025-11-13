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

      <div className="date-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        </svg>
        <p className="blog-created">{formattedDate}</p>
      </div>

      <div className="blog-content">
        <h3 className="H6">{title}</h3>
        <p>{blogContent}</p>
        <a href="#">Read more →</a>
      </div>

    </div>
  )
}

export default Blog