import React from 'react'
import './Projects.css';
export default function SocialLinks() {
  return (
    <>
      <div className='item-box'>
        <div className='main-title-div'>
          <h6 className='main-title'>All projects are deployed on live servers using free hosting platforms such as GitHub and Netlify.</h6>
        </div>
        <div className='p-container d-flex flex-column'>
          <Projects title='Calculator' discription='Pure HTML and CSS Calculator' link='https://ipsayush.github.io/Calculator/' />
          <Projects title='Spotify Clone' discription='Inspired by Shradha didi from APNA COLLAGE' link='https://ipsayush.github.io/spotify-clone/' />
          <Projects title='Parchi Game' discription='This was my favrioute game when i was child' link='https://ipsayush.github.io/Parchi-game/' />
          <Projects title='Netflix' discription='This new discription for Spotify Clone' link='https://netflix.com' />
        </div>
        <div className='inner-title-div'>
          <p className='inner-title'>Honestly, building projects was quite difficult after learning everything by myself using free resources. So I openly admit that I used the free version of ChatGPT to support my projects.</p>
        </div>
      </div>
    </>
  )
}
const Projects = (props) => {
  return (
    <div className='project-div'>
      <p className='project-discription'>{props.discription}</p>
      <li className='p-name'>
        <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          {props.title}
        </a>
      </li>
    </div>
  )
}
