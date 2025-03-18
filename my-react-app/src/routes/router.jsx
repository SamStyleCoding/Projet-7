import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';
import ApartemantPage from '../pages/apartement-page/ApartemantPage';
import About from '../pages/about/About';
import ErrorPageNotFound from '../pages/error/ErrorPageNotFound';


export const router = createBrowserRouter ([
	{
	  path: "/",
	  element: <App />,
	  errorElement: <ErrorPageNotFound />
	},
	{
	  path: "/flat/:id",
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
				<About/>
			</Main>
			<Footer />
		</>
	  ),
	}
  ])
