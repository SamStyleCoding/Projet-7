import React from 'react'
import './ApartementBanner.scss'


export function ApartementBanner(props) {
  return (
	    <div className='apartement-banner'>
			<img src={props.imageUrl} alt="" />
		</div>
  )
}
