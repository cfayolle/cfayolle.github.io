import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='pageNav'>
        <Link to='/home' >About Me</Link>
        <Link to='/home' >Projects</Link>
        <Link to='/home' >Contact Me</Link>
      </div>
      <div className='social'>
        <a><img src='./linkedIn.png' className='social-icon'/></a>
        <a><img src='./github.png' className='social-icon'/></a>
        <a></a>
      </div>
    </div>
  )
}

export default Navbar
