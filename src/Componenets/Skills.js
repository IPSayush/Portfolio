import React from 'react'
import './Skills.css'
// I don't work in css foe this fill
// Today I need to Learn To Make Only One Page Active In App.js
export default function Skills() {
  return (
    <div className='container item-box'>
      <h6 className='main-title'>I have learned all these skills on my own using free resources.</h6>
      <div className='d-flex flex-row'>
        <div className='skills-list'>
          <SkillsList1Titile title="Development Skills" />
          <div className='skills-items text-center'>
            <ul>
              <SkillsList1Items description='HTML5, CSS3, JavaScript (ES6+)' />
              <SkillsList1Items description='React.js (including React Router)' />
              <SkillsList1Items description='Bootstrap CSS for responsive UI' />
              <SkillsList1Items description='Responsive layout design (mobile & desktop)' />
              <SkillsList1Items description='React project setup using CDN & npm' />
              <SkillsList1Items description='GitHub Copilot (prompt-driven development)' />
            </ul>
          </div>
        </div>
        <div className='skills-list'>
          <SkillsList2Titile title="Works & Experience" />
          <div className='skills-items text-center'>
            <ul>
              <SkillsList2Items description='Past Meesho seller with real-world business exposure.' />
              <SkillsList2Items description='Worked in a traditional block-printing workshop/factory in Rajasthan.' />
              <SkillsList2Items description='Keen understanding of e-commerce workflows' />
            </ul>
          </div>
        </div>
        <div className='skills-list'>
          <SkillsList3Titile title="Currently Improving" />
          <div className='skills-items text-center'>
            <ul>
              <SkillsList3Items description='English communication (actively learning)' />
              <SkillsList3Items description='Improving Frontend Development' />
              <SkillsList3Items description='Backend development skills' />
              <SkillsList3Items description='Advanced prompting for GitHub Copilot' />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
const SkillsList1Titile = (props) => {
  return (
    <>
      <div className='skills-title text-center'>
        <h6 className='skill-heading'>{props.title}</h6>
      </div>

    </>
  )
}
const SkillsList2Titile = (props) => {
  return (
    <>
      <div className='skills-title text-center'>
        <h6 className='skill-heading'>{props.title}</h6>
      </div>

    </>
  )
}
const SkillsList3Titile = (props) => {
  return (
    <>
      <div className='skills-title text-center'>
        <h6 className='skill-heading'>{props.title}</h6>
      </div>

    </>
  )
}

const SkillsList1Items = (props) => {
  return (
    <li className='skills-discription'>{props.description}</li>
  )
}
const SkillsList2Items = (props) => {
  return (
    <li className='skills-discription'>{props.description}</li>
  )
}
const SkillsList3Items = (props) => {
  return (
    <li className='skills-discription'>{props.description}</li>
  )
}
