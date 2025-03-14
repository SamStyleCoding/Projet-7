import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
	<div className='footer'>
	  <div className='footer__logo'>
		<img src="Logo.bg.png" alt="Logo" width="100px" />
	  </div>
	  <div className='footer__text'>
		<p>© 2020 Kasa. All rights reserved</p>
	  </div>
	</div>
  )
}
