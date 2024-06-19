import React from 'react'
import './Styles/LoadingStyles.css'

const Loading = () => {
  return (
    <section className='h-screen flex items-center justify-center'>
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
    </section>
   
  )
}

export default Loading