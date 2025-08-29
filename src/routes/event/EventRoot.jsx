import React from 'react';
import { Outlet } from 'react-router';

import EventsNavigation from '../../components/Events/EventsNavigation';

const EventRootLayer = () => {
	return (
		<>
			<EventsNavigation />
			<div style={{'minHeight': '100vh'}}>
				<Outlet />
			</div>
		</>
	);
};

export default EventRootLayer;
