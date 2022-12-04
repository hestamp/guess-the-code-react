import React from 'react'
import './Levels.css'

const Levels = () => {
  return (
    <div className="levels">
      <button className="easyButton" data-lvl="1">
        HTML
      </button>
      <button className="medButton" data-lvl="2">
        CSS
      </button>
      <button className="hardButton" data-lvl="3">
        JavaScript
      </button>
    </div>
  )
}

export default Levels
