import React, { useEffect, useState } from 'react'
import './AppartementGrid.scss'
import Appartement from './appartement/Appartement'




export default function AppartementGrid() {

	const [apartements, setApartements ] = useState([]);

	useEffect(fetchApartement, []);

	function fetchApartement() {
		fetch('db.json')
			.then((res) => res.json())
			.then((res) => setApartements(res))
			.catch(console.error)
	}

  return (
	<div className='grid' >
		{apartements.map((apt) => (
			<Appartement title={apt.title} imageUrl={apt.cover} />
		))}
	</div>
  )

}
