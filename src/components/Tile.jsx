import React from 'react'
import './Tile.css'

function Tile(props) {
  return (
    <div className="tile">
        {props.children}
    </div>
  )

}
export default Tile



