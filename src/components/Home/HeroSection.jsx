import React from 'react';
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
							EventHub is your premier platform for finding, managing, and
							attending the most exciting events of 2025 and beyond. Experience
							events like never before.
						</p>
						<div
							className={`${classes['hero-buttons']} ${classes.animate} ${
								classes.delay - 2
							}`}>
							<button className={`${classes.btn} ${classes['btn-primary']}`}>
								Explore Events
							</button>
							<button className={`${classes.btn} ${classes['btn-secondary']}`}>
								Learn More
							</button>
						</div>
					</div>
				</Card>
			</section>
		</>
	);
};

export default HeroSection;
