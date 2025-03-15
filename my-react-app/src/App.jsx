import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import AppartementGrid from './components/appartement-grid/AppartementGrid'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import './App.css'


export default function App() {
  return (
	<div>
	  <Navbar />
	  <Main>
	  	<Banner />
	  	<AppartementGrid />
	  </Main>
	  <Footer />
	</div>
  )
}


