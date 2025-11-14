import React, { useState, useEffect } from 'react'
import './LatestBlogs.css'
import Blog from './Blog'

function LatestBlogs() {

  //Add state 
  const [blogs, setBlogs] = useState([])


  //Function to get data from API
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
      const data = await res.json()
      setBlogs(data)
    }

    fetchData()
  }, [])


  return (
    <section id="latest-blogs">

      <div id="blogs-info">

        <p className="H4">Latest Blog and News</p>

        <h3 className="H3">Check Out Our Latest Blog and News Update</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

      </div>

      <div id="blog-cards">

        {blogs.map((blog) => (

          <Blog
            key={blog.id}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            created={blog.created} />

        ))}

      </div>
    </section>
  )

}
export default LatestBlogs