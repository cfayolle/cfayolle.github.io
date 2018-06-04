import React from 'react'
import {} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'

const Nav = () => {
  return (
    <Navbar right className='nav'>
      <NavItem className='navBtn' to='/home' >About Me</NavItem>
      <NavItem className='navBtn' to='/home' >Projects</NavItem>
      <NavItem className='navBtn' to='/home' >Contact Me</NavItem>
    </Navbar>
  )
}

export default Nav
