import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='mainNav'>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/aboutUs">About</NavLink>
        <NavLink to ="/history">History</NavLink>
    </nav>
  )
}

export default NavBar