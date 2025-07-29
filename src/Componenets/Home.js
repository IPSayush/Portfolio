import React from 'react'

export default function Home() {
  return (
    <div className="item-box">
      <div className='home-item'>
        <p className='intro'>
          <span className='intro-name'>Hi, I'm Ayush —</span> a passionate learner building beautiful and functional web projects. I love to explore new technologies and create innovative solutions that make a difference.<br /> Welcome to my portfolio!
        </p>
        <div className='resume-div'>
          <div className="resume-btn-div">
            <a className="resume-btn" href="/assets/pdfFile.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
          <div className="resume-btn-div">
            <a className="resume-btn" href="/assets/pdfFile.pdf" download>Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}
