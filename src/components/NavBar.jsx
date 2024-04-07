import React from 'react'

import logo from '../stackline_logo.svg'

const NavBar = () => {
  return(
    <div className="nav-bar">
      <img src={logo} className="logo" alt="stackline-logo" />
    </div>
  )
}

export default NavBar