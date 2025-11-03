import React from 'react'
import WhyUs1 from './WhyUsIcon1.svg'
import WhyUs2 from './WhyUsIcon2.svg'
import WhyUs3 from './WhyUsIcon3.svg'
import WhyUs4 from './WhyUsIcon4.svg'
import './WhyUs.css'
import WhyUsImg from './Bg-ImgWhyUs.svg'

function WhyUs() {
  return (
    
    <section id="WhyUs">
      <div id="whyus-content">
      
        <div id="Whyus-wrapper-left">

          <p className="H4">Why Choose Us</p>

        <h3 className ="H3">Choose Us for Exceptional Storage Solutions
        </h3>

        <div id="notes">

           <div className="note">

            <img src={WhyUs1} alt="" />
            <div>
            <p className="H5">Security and Safety</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            </div>

            <div className="note">
            <img src={WhyUs2} alt="" />
            <div>
            <p className="H5">Security and Safety</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            </div>


            <div className="note">
            <img src={WhyUs3} alt="" />
            <div>
            <p className="H5">Security and Safety</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            </div>

            <div className="note">
            <img src={WhyUs4} alt="" />
            <div>
            <p className="H5">Security and Safety</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            </div>
        </div>

       </div>
        
        <div id="WhyUs-img">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

        <img src={WhyUsImg} alt="" />
        </div>

        </div>


        </section>
  )
}

export default WhyUs