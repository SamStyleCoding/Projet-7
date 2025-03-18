import React from 'react'
import './ApartementDescription.scss'

export function ApartementDescription(props) {
	return (
		<div className="appartement-page__description">
			<p className='description__header'>
				<span>{props.title}</span>
				<i className="fa-solid fa-chevron-up"></i>
			</p>
			<p className='description__content'>
				{props.content}
			</p>
		</div>
	)
}