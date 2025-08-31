import React from 'react';
import { useRouteLoaderData } from 'react-router';

import EventForm from '../../components/Events/EventForm';

const EditEventPage = () => {
	const data = useRouteLoaderData('event-detail'); // Use the loader data from the route with id 'event-detail'

	return (
		<>
			<EventForm method="patch" event={data.event} />
		</>
	);
};

export default EditEventPage;
