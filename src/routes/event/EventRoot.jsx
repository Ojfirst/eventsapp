import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Home/Footer';
import EventsNavigation from '../../components/Events/EventsNavigation';

const EventRootLayer = () => {
	return (
		<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
			<EventsNavigation />
			<main style={{ flex: 1 }}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default EventRootLayer;
