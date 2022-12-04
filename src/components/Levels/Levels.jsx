import React from 'react'
import './Levels.css'

const Levels = ({ levelSelect, difficultySet }) => {
  return (
    <div className="levels">
      <button
        className={difficultySet === 1 ? 'active' : ''}
        onClick={() => levelSelect(1)}
      >
        HTML
      </button>
      <button
        onClick={() => levelSelect(2)}
        className={difficultySet === 2 ? 'active' : ''}
      >
        CSS
      </button>
      <button
        onClick={() => levelSelect(3)}
        className={difficultySet === 3 ? 'active' : ''}
      >
        JavaScript
      </button>
    </div>
  )
}

export default Levels
