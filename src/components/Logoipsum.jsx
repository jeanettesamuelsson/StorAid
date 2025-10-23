import React from 'react'
import Logo1 from './Logoipsum 1.svg'
import Logo2 from './Logoipsum 2.svg'
import Logo3 from './Logoipsum 3.svg'
import Logo4 from './Logoipsum 4.svg'
import Logo5 from './Logoipsum 5.svg'
import './Logoipsum.css'


function Logoipsum() {
  return (
    <div id="logo-banner">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
    </div>
  )
}

export default Logoipsum