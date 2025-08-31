import React from 'react';
import { Outlet } from 'react-router';

import MainNavigation from '../components/Home/MainNavigation';
import Footer from '../components/Home/Footer';
const RootLayer = () => {
	return (
		<>
			<MainNavigation />
			<main style={{'minHeight': '100vh'}}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayer;
