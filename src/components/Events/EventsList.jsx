import { Link } from 'react-router';
import classes from './EventsList.module.css';

function EventsList({ events }) {
       // Ensure events is an object and get its entries as [id, event] pairs
       if (!events || typeof events !== 'object') {
	       return <div className={classes.error}>No events found.</div>;
       }
       const eventList = events ? Object.entries(events) : [];
       return (
	       <div className={classes.events}>
		       <h1>All Events</h1>
		       <ul className={classes.list}>
			       {eventList.map(([eventId, event]) => (
				       <li key={eventId} className={classes.item}>
					       <Link to={`/events/${eventId}`}>
						       <img src={event.image} alt={event.title} />
						       <div className={classes.content}>
							       <h2>{event.title}</h2>
							       <time>{event.date}</time>
						       </div>
					       </Link>
				       </li>
			       ))}
		       </ul>
	       </div>
       );
}

export default EventsList;
