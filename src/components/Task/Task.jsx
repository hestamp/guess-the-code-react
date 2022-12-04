import React from 'react'
import './Task.css'
const Task = ({ wordObject }) => {
  return (
    <div className="task">
      <p className="taskText">{wordObject && wordObject.task}</p>
    </div>
  )
}

export default Task
