import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'

const Nav = () => {
  return (
    <Navbar right className='grey'>
      <NavItem className='navBtn' to='/home' >About Me</NavItem>
      <NavItem className='navBtn' to='/home' >Projects</NavItem>
      <NavItem className='navBtn' to='/home' >Contact Me</NavItem>
    </Navbar>
  )
}

export default Nav
