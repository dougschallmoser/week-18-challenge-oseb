import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
      >Home</NavLink><br/>
      <NavLink
        to="/people"
        exact
      >People</NavLink><br/>
      <NavLink
        to="/number"
        exact 
      >Number</NavLink><br/>
    </div>
  )
}

export default NavBar;