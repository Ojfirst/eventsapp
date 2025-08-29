import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router';

import EventsList from '../../components/Events/EventsList';
import Footer from '../../components/Home/Footer';

const EventPage = () => {
	const { events } = useLoaderData();
	console.log(events); // Log the events data for debugging

	return (
		<>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
				<Await resolve={events}>
					{(loadedEvents) => <EventsList events={loadedEvents} />}
				</Await>
				<Footer />
			</Suspense>
		</>
	);
};

export default EventPage;
