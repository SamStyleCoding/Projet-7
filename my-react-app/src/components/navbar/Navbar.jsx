import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
	<nav className="navbar">
		<div className="navbar-logo">
			<img src="Logo.png" alt="Logo" width="130px" />
		</div>
		<div className='list'>
			<div>Accueil</div>
			<div>A propos</div>
		</div>
	</nav>
  )
}
