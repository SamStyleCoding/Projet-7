import React from 'react';
import './ApartemantPage.scss';
import { ApartementDescription } from '../../components/Apartement-description/ApartementDescription';
import { ApartementBanner } from '../../components/apartement-banner/ApartementBanner'
import { ApartementHeader } from '../../components/apartement-header/ApartementHeader';


export default function ApartemantPage() {
  return (
	<div className='apartement-page'>
		<ApartementBanner />
		<ApartementHeader />
		<div className='apartement__description__area'>
			<ApartementDescription />
			<ApartementDescription />
		</div>
	</div>
  )
}

