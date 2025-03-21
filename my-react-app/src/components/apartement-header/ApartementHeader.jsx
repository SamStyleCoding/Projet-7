import React from 'react'
import './ApartementHeader.scss'

export function ApartementHeader({data}) {

	const { name } = data.host;
	const [firstName, lastName] = name.split(" ");

  return (
	    <div className='apartement-page__header'>
			<div className='apartement-title'>
				<h1>{data.title}</h1>
				<h2>{data.location}</h2>
				<div className='apartement-tags'>
					{data.tags.map((tag) => (
						<span key={tag}>{tag}</span>
					))}
				</div>
			</div>
			<div className='appartement-page__owner'>
				<div className='apartement-details'>
					<h3>
						<span>{firstName}</span>
						<span>{lastName}</span>
					</h3>
					<div className='appartement-badge'>
						<img src={data.host.picture} />
					</div>
				</div>
				<div className='appartement-stars'>
					{[1, 2, 3, 4, 5].map((num) => (
						<span key={num} className={data.rating >= num  ? "on" : ""}>★</span>
					))}
				</div>
			</div>
		</div>
  	)
}
