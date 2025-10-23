import React from 'react'
import heroImage from './Rectangle 2.svg'
import './Home.css'
import Button from '../../Button/Button'
import AboutUs from '../../AboutUs'



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
    
    </>


    
  )
}

export default Home