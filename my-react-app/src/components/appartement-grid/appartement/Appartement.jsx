import React from 'react'
import { NavLink } from "react-router-dom"
import '../appartement/Appartement.scss'

export default function Appartement() {
  return (
	<div className='apartment'>
	  <NavLink to="/flat" className='apartment__subtitle'>Titre de la location</NavLink>
	</div>
  )
}
