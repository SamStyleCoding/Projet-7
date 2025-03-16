import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';
import ApartemantPage from '../pages/ApartemantPage';


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
			<Main>
				<ApartemantPage />
			</Main>
			<Footer />
		</>
	  ),
	},
	{
	  path: "/about",
	  element: (
		<>
			<Navbar />
			<Main>
				<h1>A propos</h1>
			</Main>
			<Footer />
		</>
	  ),
	}
  ])
