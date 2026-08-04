import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
   <nav>
    <h2>IMDb</h2>
    <NavLink to = "/">Home</NavLink>

    {" | "}
    <NavLink to = "/favorites">Favorites</NavLink>
   </nav>
  )
}

export default Navbar