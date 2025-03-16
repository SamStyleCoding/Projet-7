import React from 'react'
import './ApartementHeader.scss'

export function ApartementHeader() {
  return (
	  <div className='apartement-page__header'>
			<div className='apartement-title'>
				<h1>Crazy loft on Canal Martin</h1>
				<h2>Paris, îls-de-france</h2>
				<div className='apartement-tags'>
					<span>Cozy</span>
					<span>Canak</span>
					<span>Paris 10</span>
				</div>
			</div>
			<div className='appartement-page__owner'>
				<div className='apartement-details'>
					<h3>
						<span>Alexandre</span>
						<span>Dumas</span>
					</h3>
					<div className='appartement-badge'></div>
				</div>
				<div className='appartement-stars'>
					<span>★</span>
					<span>★</span>
					<span>★</span>
					<span>☆</span>
					<span>☆</span>
				</div>
			</div>
		</div>
  )
}
