import React from 'react'
import './LatestBlogs.css'
import Blog from './Blog'

function LatestBlogs() {
  return (
    <section id="latest-blogs">

        <p className="H4">Latest Blog and News</p>

        <h3 className="H3">Check Out Our Latest Blog and News Update</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

        <div id="blog-cards">

        <Blog />
        <Blog />
        <Blog />

        </div>




    
    </section>
  )
}

export default LatestBlogs