import React from 'react';
import { Link } from 'react-router';

import Card from '../UI/Card';
import classes from './HeroSection.module.css';

const HeroSection = () => {
	return (
		<>
			<section className={classes.hero}>
				<Card>
					<div className={classes['hero-content']}>
						<h1 className={classes.animate}>Discover Extraordinary Events</h1>
						<p className={`${classes.animate} ${classes.delay - 1}`}>
							Eventify is your premier platform for finding, managing, and
							attending the most exciting events of 2025 and beyond. Experience
							events like never before.
						</p>
						<div
							className={`${classes['hero-buttons']} ${classes.animate} ${
								classes.delay - 2
							}`}>
							<Link to={'/events'} className={`${classes.btn} ${classes['btn-primary']}`}>
								Explore Events
							</Link>
							<Link className={`${classes.btn} ${classes['btn-secondary']}`}>
								Learn More
							</Link>
						</div>
					</div>
				</Card>
			</section>
		</>
	);
};

export default HeroSection;
