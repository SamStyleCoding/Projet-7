import React, { useState, useEffect } from 'react';
import './ApartemantPage.scss';                                         
import { ApartementDescription } from '../../components/Apartement-description/ApartementDescription';
import { ApartementBanner } from '../../components/apartement-banner/ApartementBanner'
import { ApartementHeader } from '../../components/apartement-header/ApartementHeader';
import { useParams } from 'react-router-dom';


export default function ApartemantPage() {

	const { id } = useParams();

	const [selectFlat, setSelectFlat] = useState(null);

	useEffect(() => {
		fetchApartementData();
	}, [id]);
	
		function fetchApartementData() {
			fetch('/db.json')
				.then((res) => res.json())
				.then((flats) => {
					const flat = flats.find((flat) => flat.id === id);
					setSelectFlat(flat);
				})
				.catch(console.error)
		}

		if(selectFlat === null) {
			return <div>Loading...</div>
		}

  return (
	<div className='apartement-page'>
		<ApartementBanner imageArrey={selectFlat.pictures} />
		<ApartementHeader data={selectFlat} />
		<div className='apartement__description__area'>
			<ApartementDescription title="Description" content={selectFlat.description} />
			<ApartementDescription title="Equipements" content={selectFlat.equipments.map((i) => <li key={i}>{i}</li>)} />
		</div>
	</div>
  )
}

