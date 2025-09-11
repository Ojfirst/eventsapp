import { NavLink, Form, useRouteLoaderData } from 'react-router';
import Card from '../UI/Card';

import classes from './MainNavigation.module.css';
import NewsletterSignup from '../NewsLetter/NewsletterSignup';

function MainNavigation() {
	const token = useRouteLoaderData('root');

	return (
		<header className={classes.header}>
			<Card>
				<nav>
					<div className={classes.logo}>
						<i class="fas fa-calendar-star"></i>
						Eventify
					</div>
					<ul className={classes.list}>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}
								end>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/events"
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}>
								Events
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/newsletter"
								className={({ isActive }) =>
									isActive ? classes.active : undefined
								}>
								Newsletter
							</NavLink>
						</li>
						{token && (
							<li>
								<NavLink
									to="/profile"
									className={({ isActive }) =>
										isActive ? classes.active : undefined
									}>
									Profile
								</NavLink>
							</li>
						)}
						{!token && (
							<li>
								<NavLink
									to="/auth?mode=login"
									className={({ isActive }) =>
										isActive ? classes.active : undefined
									}>
									Login
								</NavLink>
							</li>
						)}
					</ul>
					<NewsletterSignup />
				</nav>
			</Card>
		</header>
	);
}

export default MainNavigation;
