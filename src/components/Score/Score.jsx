import React from 'react'
import './Score.css'

const Score = ({ resetScore, streakStat, winStat }) => {
  return (
    <div className="scoreTable">
      <div className="stabs">
        <div className="winGames">
          Wins: <span> {winStat}</span>
        </div>
        <div className="winStrick">
          Streak: <span> {streakStat}</span>
        </div>
        <button onClick={resetScore} className="resetScore">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Score
