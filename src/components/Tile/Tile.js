import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const dynamicColor = props.seleted || props.matched ? { backgroundColor: props.color } : null
  return (
    <div className='Tile' style={dynamicColor}>
      {props.seleted || props.matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile
