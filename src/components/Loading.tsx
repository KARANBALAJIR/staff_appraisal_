import React from 'react'
import './Styles/LoadingStyles.css'

const Loading = () => {
  return (
    <div className='flex flex-col'>
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
      <div>Loading...</div>
    </div>
  )
}

export default Loading