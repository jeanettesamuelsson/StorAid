import React from 'react'
import './Tile.css'

function Tile(props) {
  return (
    <div className="tile">
        <p>{props.children}</p>
    </div>
  )

}
export default Tile



