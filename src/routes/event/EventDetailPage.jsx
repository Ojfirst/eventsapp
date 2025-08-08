import React, { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router';

import EventItem from '../../components/Events/EventItem';
import EventsList from '../../components/Events/EventsList';

const EventDetailPage = () => {
	const { event, events } = useRouteLoaderData('event-detail'); // Use the loader data from the route with id 'event-detail'

	console.log('event:', event, 'Events:', events);
	return (
		<>
			<Suspense
				fallback={
					<p style={{ textAlign: 'center' }}>Loading Event details....</p>
				}>
				<Await resolve={event}>
					{(loadEvent) => <EventItem event={loadEvent} />}
				</Await>
			</Suspense>

			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
				<Await resolve={events}>
					{(loadEvent) => <EventsList events={loadEvent} />}
				</Await>
			</Suspense>
		</>
	);
};

export default EventDetailPage;
