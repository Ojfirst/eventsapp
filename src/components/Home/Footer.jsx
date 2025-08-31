import React from 'react';
import Card from '../UI/Card';

import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer>
			<Card>
				<div class={classes['footer-content']}>
					<div class={classes['footer-section']}>
						<h3>Eventify</h3>
						<p>
							Discover and create extraordinary events with our cutting-edge
							platform.
						</p>
					</div>
					<div class={classes['footer-section']}>
						<h3>Get the App</h3>
						<p>
							Available on iOS and Android devices. Download now and never miss
							an event.
						</p>
					</div>
					<div class={classes['footer-section']}>
						<h3>Contact Us</h3>
						<p>Email: info@Eventify.com</p>
						<p>Phone: +234 (806) 309-6363</p>
					</div>
				</div>
				<div class={classes['footer-bottom']}>
					<p>&copy; 2025 Eventify. All rights reserved.</p>
				</div>
			</Card>
		</footer>
	);
};

export default Footer;
