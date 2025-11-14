import React from 'react'
import './Tile.css'

function Tile({title, text}) {
  return (
    <div className="tile">
        <p className="H5">{title}</p>
        <p>{text}</p>
    </div>
  )

}
export default Tile



