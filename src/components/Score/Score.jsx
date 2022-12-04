import React from 'react'
import './Score.css'

const Score = () => {
  return (
    <div className="scoreTable">
      <div className="stabs">
        <div className="winGames">
          Wins: <span> 0</span>
        </div>
        <div className="winStrick">
          Streak: <span> 0</span>
        </div>
        <button className="resetScore">Reset</button>
      </div>
    </div>
  )
}

export default Score
