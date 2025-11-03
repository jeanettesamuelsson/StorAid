import React, { useState, useEffect } from 'react'
import './LatestBlogs.css'
import Blog from './Blog'

function LatestBlogs() {

  //add state 
  const [blogItems, setBlogItems] = useState([])


  //function to get data from API
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
      const data = await res.json()
      setBlogItems(data)

    }

    fetchData()
  }, [])


  return (
    <section id="latest-blogs">

      <p id="blogs-info">

        <p className="H4">Latest Blog and News</p>

        <h3 className="H3">Check Out Our Latest Blog and News Update</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

      </p>

      <div id="blog-cards">

        {blogItems.map((item) => (

          <Blog
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            created={item.created} />

        ))}

      </div>
    </section>
  )

}
export default LatestBlogs