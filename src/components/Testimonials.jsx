import React from 'react'
import './Testimonials.css'
import ClientImg from './clientimg.svg'
import QuoteImg from './clientquote.svg'

function Testimonials() {
  return (
    <section id="testimonials">
        <h3 className="H4">Testimonials</h3>

        <p className="H3">See What Our Clients Have To Say</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

        <div id="cards">
            <div className ="card"> 
                <div className ="stars">
                      <p className ="H5">★★★★★</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis 
                    cing elit. Ut libero lectus, porta nec turpis sit 
                    amet, lobortis fringilla ante.</p>
                </div>
                
                <div className="customer">
                    <img src={ClientImg} alt="" />
                    <div className="customer-name">
                         <p className="H6">Aiden Harvey</p>
                        <p>Customer</p>
                    </div>
                    <img src={QuoteImg} alt="" />

                    


                </div>
            </div>

            <div className ="card"> 
                 <div className ="stars">
                      <p className ="H5">★★★★★</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis 
                    cing elit. Ut libero lectus, porta nec turpis sit 
                     amet, lobortis fringilla ante.</p>
                </div>

                <div className="customer">
                    <img src={ClientImg} alt="" />
                    <div className="customer-name">
                        <p className="H6">Carrisa Jocelyn</p>
                        <p>Customer</p>
                    </div>
                    
                    <img src={QuoteImg} alt="" />



                </div>
                


            </div>

            <div className ="card"> 
                <div className ="stars">
                    <p className ="H5">★★★★★</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis 
                    cing elit. Ut libero lectus, porta nec turpis sit 
                     amet, lobortis fringilla ante.</p>
                </div>

                <div className="customer">
                    <img src={ClientImg} alt="" />
                    <div className="customer-name">
                        <p className="H6">Celvin Gabriel</p>
                        <p>Customer</p>
                    </div>
                    <img src={QuoteImg} alt="" />


                </div>
                
                
            </div>


        </div>

   </section>
  )
}

export default Testimonials