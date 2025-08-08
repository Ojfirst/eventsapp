import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router';

import EventsList from '../../components/Events/EventsList';

const EventPage = () => {
	const { events } = useLoaderData();
	console.log(events); // Log the events data for debugging

	return (
		<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
			<Await
				resolve={events}
				errorElement={
					<div style={{ textAlign: 'center' }}>Error loading events...</div>
				}>
				{(loadedEvents) => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	);
};

export default EventPage;
