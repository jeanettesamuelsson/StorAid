import React from 'react'
import Testimonials from '../../Testimonials'
import Banner from '../../Banner'
import FAQ from '../../FAQ'
import Services from '../../Services'

function ServicesPage() {
  return (
    <>

    <section id="hero">
        <div id="hero-text">
          <p className="H1">Services</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

        </div>
      </section>

      <Services />
      <Testimonials />
      <FAQ />
      <Banner />

    </>
  )
}

export default ServicesPage