import React from 'react'
import './Services.css'
import Tile from './Tile'
import BgImg from './BgImg.svg'

function Services() {
    return (
        <section id="our-services">

            <p className='H4'> Our Services</p>
            <div id="top-wrapper">
                <h3 className='H3'>Specialized Storage for Every Special Item</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>

            <div id="bottom-wrapper">
                <div>
                    <Tile
                        title="Diverse Unit Sizes"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    />

                    <Tile
                        title="Moving Assistance"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    />

                </div>

                <img src={BgImg} alt="" />

                <div>

                    <Tile
                        title="Vehicle Storage"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    />

                    <Tile
                        title="Top-Notch Security"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    />

                </div>
            </div>
        </section>
    )
}

export default Services