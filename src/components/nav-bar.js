import React from 'react'
import {} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'

const Nav = () => {
  return (
    <Navbar right className='nav'>
      <NavItem className='navBtn' href='/#about' >About Me</NavItem>
      <NavItem className='navBtn' href='/#projects' >Projects</NavItem>
      <NavItem className='navBtn' href='/#contact' >Contact</NavItem>
    </Navbar>
  )
}

export default Nav
