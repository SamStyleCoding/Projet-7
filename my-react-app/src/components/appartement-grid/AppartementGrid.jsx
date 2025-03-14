import React from 'react'
import './AppartementGrid.css'
import Appartement from './appartement/Appartement'


export default function AppartementGrid() {
  return (
	<div className='grid'>
	  <Appartement />
	  <Appartement />
	  <Appartement />
	  <Appartement />
	  <Appartement />
	  <Appartement />
	</div>
  )
}
