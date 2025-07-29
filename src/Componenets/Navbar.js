import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav_bar'>
        <div className='left nav-Items'>
            Portfolio
        </div>
        <div className='right'>
            <NavLink to='/home' className='nav-Items'>Home</NavLink>
            <NavLink to='/skills' className='nav-Items'>Skills</NavLink>
            <NavLink to='/projects' className='nav-Items'>Projects</NavLink>
        </div>
    </div>
  )
}
