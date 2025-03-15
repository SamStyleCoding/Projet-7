import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


export const router = createBrowserRouter ([
	{
	  path: "/",
	  element: <App />,
	  errorElement: <h1>404 NotFound</h1>
	},
	{
	  path: "/flat",
	  element: (
		<>
			<Navbar />
			<h1>Nos Appartement</h1>
			<Footer />
		</>
	  ),
	},
	{
	  path: "/about",
	  element: (
		<>
			<Navbar />
			<h1>A propos</h1>
			<Footer />
		</>
	  ),
	}
  ])
