import React from 'react'
import "./About.scss"
import { ApartementDescription } from '../../components/Apartement-description/ApartementDescription'
import { ApartementBanner } from '../../components/apartement-banner/ApartementBanner'


export default function About() {
  return (
	<div>
	  <ApartementBanner />
	  <div className='about-container'>
		<ApartementDescription />
		<ApartementDescription />
		<ApartementDescription />
		<ApartementDescription />
	  </div>
	</div>
  )
}
