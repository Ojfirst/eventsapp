import React, { useState } from 'react';
import { NavLink, useRouteLoaderData } from 'react-router';
import classes from './MobileMenu.module.css';

const MobileMenu = () => {
	const [open, setOpen] = useState(false);

	const token = useRouteLoaderData('root');

	return (
		<div className={classes.header}>
			<div className={classes.logo}>
				<i className="fas fa-calendar-star"></i>
				Eventify
			</div>
			<nav className={classes.mobileNav}>
				<button
					className={classes.hamburger}
					aria-label="Open menu"
					onClick={() => setOpen((prev) => !prev)}>
					<span className={open ? classes.open : ''}></span>
					<span className={open ? classes.open : ''}></span>
					<span className={open ? classes.open : ''}></span>
				</button>
				<div className={`${classes.menu} ${open ? classes.show : ''}`}>
					<NavLink to="/" onClick={() => setOpen(false)}>
						Home
					</NavLink>
					<NavLink to="/events" onClick={() => setOpen(false)}>
						Events
					</NavLink>
					<NavLink to="/newsletter" onClick={() => setOpen(false)}>
						Newsletter
					</NavLink>
					{token && (
						<NavLink to="/profile" onClick={() => setOpen(false)}>
							Profile
						</NavLink>
					)}
					{!token && (
						<NavLink to="/auth?mode=login" onClick={() => setOpen(false)}>
							Login
						</NavLink>
					)}
				</div>
			</nav>
		</div>
	);
};

export default MobileMenu;
