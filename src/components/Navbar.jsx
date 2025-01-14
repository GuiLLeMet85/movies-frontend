import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='menu'>
      {  <ul>
                <li><NavLink className={(element) => element.isActive ? 'selected' : '' } to="/">Home</NavLink></li>
                <li><NavLink className= {(element)=> element.isActive ? 'selected' : '' } to="new">New</NavLink></li>
                <li><NavLink className={(element) => element.isActive ? 'selected' : '' } to="movies">Go back</NavLink></li>
            </ul>/* Should use react-router-dom NavLinks to browse through the different pages */}
    </div>
  )
}
