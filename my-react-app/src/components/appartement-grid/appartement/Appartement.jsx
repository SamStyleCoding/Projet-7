import React from 'react'
import { NavLink } from "react-router-dom"
import '../appartement/Appartement.scss'

export default function Appartement(props) {

  return (
		<div className='apartment'>
			<NavLink to={`/flat/${props.id}`}>
				<img src={props.imageUrl} />
				<div className='apartment__subtitle'>{props.title}</div>
			</NavLink>
		</div>
  );
}
