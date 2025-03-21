import React from 'react'
import './ErrorPageNotFound.scss'
import Main from '../../components/main/Main'
import { NavLink } from 'react-router-dom'


export default function ErrorPageNotFound() {
  return (
	<div>
	  <Main>
		<div className='error-page'>
			<h1>404</h1>
			<h2>Oops! La page que vous demandez n'existe pas</h2>
			<NavLink to="/">Retourner sur la page d'acceuil</NavLink>
		</div>
	  </Main>
	</div>
  )
}
