import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const dynamicColor = props.seleted || props.matched ? { backgroundColor: color } : { backgroundColor: null }
  return (
    <div className='Tile' style={dynamicColor}>
    </div>
  )
}

export default Tile
