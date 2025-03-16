import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.scss'

export default function Navbar() {
  return (
	<nav className="navbar">
		<NavLink to="/" className="navbar-logo">
			<img src="Logo.png" alt="Logo" width="130px" />
		</NavLink>
		<div className='list'>
			<NavLink to="/">Accueil</NavLink>
			<NavLink to="/about">A propos</NavLink>
		</div>
	</nav>
  )
}
