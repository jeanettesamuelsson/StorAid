import React from 'react'
import heroImage from './Rectangle 2.svg'
import './Home.css'
import Button from '../../Button/Button'
import AboutUs from '../../AboutUs'
import Logoipsum from '../../Logoipsum'
import Testimonials from '../../Testimonials'
import WhyUs from '../../WhyUs'
import LatestBlogs from '../../LatestBlogs'




function Home() {
  return (

    <>
    <section id="hero">
      <div id="hero-text">
        <p className ="H4">Welcome to StoreAid</p>
        <p className="H1">Space Simplified, Storage Perfected</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>

        <Button>Discover More</Button>

    </div>

      <img src={heroImage} alt="" />

    </section>

    <AboutUs />
    <Logoipsum />
    <Testimonials />
    <WhyUs />
    <LatestBlogs />
    
    
    </>


    
  )
}

export default Home