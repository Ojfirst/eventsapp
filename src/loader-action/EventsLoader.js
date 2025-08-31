export const loadEvents = async () => {
	const response = await fetch('https://events-d92e9-default-rtdb.europe-west1.firebasedatabase.app/events.json');

	if (!response.ok) {
		throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {
			status: 500,
		});
	} else {
		const resData = await response.json();
		return resData;
    

		// return response.json().then(data => data.events || []); // Ensure data.events is an array
	}
};

const EventsLoader = () => {
	return {
		events: loadEvents(),
	};
};

export default EventsLoader;
