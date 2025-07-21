import React from 'react'
import './Projects.css';
export default function SocialLinks() {
  return (
    <>
      <div className='item-box'>
        <div className='main-title-div'>
          <h6 className='main-title'>Honestly, building projects was quite difficult after learning everything by myself using free resources. So I openly admit that I used the free version of ChatGPT to support my projects.</h6>
        </div>
        <div className='inner-title-div'>
          <p className='inner-title'>All projects are deployed on live servers using free hosting platforms such as GitHub and Netlify.</p>
        </div>
        <div className='p-container d-flex flex-column'>
          <Projects title='Ludo' discription='This new discription for Ludo' />
          <Projects title='Calculator' discription='This new discription for Calculator' />
          <Projects title='Tic Tac Toe' discription='This new discription for Tic Tac Toe' />
          <Projects title='Portfolio' discription='This new discription for Portfolio' />
        </div>
      </div>
    </>
  )
}
const Projects = (props) => {
  return (
    <div className='project-div'>
      <p className='project-discription'>{props.discription}</p>
      <li className='p-name'>{props.title}</li>
    </div>
  )
}
