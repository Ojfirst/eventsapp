import React from 'react';
import Card from '../UI/Card';

import classes from './Features.module.css';

const Features = () => {
	return (
		<>
			<section className={classes['features']}>
				<Card>
					<h2 className={classes['section-title']}>Why Choose Eventify?</h2>
					<div className={classes['features-grid']}>
						<div
							className={`${classes['feature-card']} ${classes.animate} ${
								classes.delay - 1
							}`}>
							<div className={classes['feature-icon']}>
								<i className="fas fa-ticket-alt"></i>
							</div>
							<h3>Easy Registration</h3>
							<p>
								Secure your spot at any event with just a few clicks. No hassle,
								no complications
							</p>
						</div>
						<div
							className={`${classes['feature-card']} ${classes.animate} ${
								classes.delay - 2
							}`}>
							<div className={classes['feature-icon']}>
								<i className="fas fa-bell"></i>
							</div>
							<h3>Smart Notifications</h3>
							<p>
								Get reminded about upcoming events and receive updates from
								organizers.
							</p>
						</div>
						<div
							className={`${classes['feature-card']} ${classes.animate} ${
								classes.delay - 3
							}`}>
							<div className={classes['feature-icon']}>
								<i className="fas fa-users"></i>
							</div>
							<h3>Connect with Others</h3>
							<p>
								Meet people who share your interests and make lasting
								connections at events.
							</p>
						</div>
					</div>
				</Card>
			</section>
		</>
	);
};

export default Features;
