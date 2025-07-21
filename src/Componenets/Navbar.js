import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
export default function Navbar() {
  return (
    <BrowserRouter>
    <div className='nav_bar'>
        <div className='left nav-Items'>
            Portfolio
        </div>
        <div className='right'>
            <NavLink to='/' className='nav-Items'>Home</NavLink>
            <NavLink to='/skills' className='nav-Items'>Skills</NavLink>
            <NavLink to='/projects' className='nav-Items'>Projects</NavLink>
        </div>
    </div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}
