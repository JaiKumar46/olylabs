import React from 'react'
import Logo from './Logo'
import Auth from './Auth'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Logo/>
        <Auth/>
    </div>
  )
}

export default Navbar