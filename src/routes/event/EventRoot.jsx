import React from 'react';
import { Outlet } from 'react-router';

import EventsNavigation from '../../components/Events/EventsNavigation';

const EventRootLayer = () => {
	return (
		<>
			<EventsNavigation />
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default EventRootLayer;
