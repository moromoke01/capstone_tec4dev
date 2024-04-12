import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
const Navbar = () => {
  return (
    <div className='container'>
        <div className='navbar'>
            <img src={logo} className='logo'/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Learn</li>
                <li>Contact</li>
                <li><button className='second'>Sign Up</button></li>
                <li><button>Take Test</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar