import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Navbar = () => {

  return (
    <nav className='navbar'>
      <h2 className='nav-logo'>DH Dentist</h2>
      <ul className='nav-list'>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/favs" >Favorites</Link></li>
        <button className='nav-button'>Change theme</button>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}