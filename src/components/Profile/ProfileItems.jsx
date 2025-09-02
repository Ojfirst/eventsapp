import React from 'react';
import { useRouteLoaderData, Link, Form } from 'react-router';
import { getUserEmail } from '../../util/auth';

import classes from './ProfileItems.module.css';

const ProfileItems = () => {
	const data = useRouteLoaderData('profile');
	const storedEmail = getUserEmail();

	// Handle cases where data is not available or not an object
	if (!data || typeof data !== 'object') {
		return (
			<div className={classes.outlet}>
				<p>Could not load profile data.</p>
			</div>
		);
	}

	// Find the user's specific profile from the data
	const userProfile = Object.values(data).find(
		(profile) => profile.userEmail === storedEmail
	);

	let content;

	// Render the profile if it exists
	if (userProfile) {
		content = (
			<div key={userProfile.id} className={classes.container}>
				<h2>Profile</h2>
				<h4>{userProfile.userEmail}</h4>
				<p>
					Fullname: <span className={classes.data}>{userProfile.fullName}</span>
				</p>
				<p>
					Interest: <span className={classes.data}>{userProfile.interest}</span>
				</p>
				<p>
					Social Link:{' '}
					<span className={classes.data}>{userProfile.socialLink}</span>
				</p>
				<p>
					Created at:{' '}
					<span className={classes.data}>
						{userProfile.date}, {userProfile.time}
					</span>
				</p>
				<ul>
					<li>
						<Link to="edit-profile">Edit profile</Link>
					</li>
					<li>
						<Link to="changePassword">Change Password</Link>
					</li>
					<li>
						<Form action="/logout" method="post">
							<button>Logout</button>
						</Form>
					</li>
				</ul>
			</div>
		);
	} else {
		// Render a "create profile" view if no profile is found for the user
		content = (
			<ul className={classes.container}>
				<h2>Profile</h2>
				<li>
					<Link to="new-profile">Create a new profile</Link>
				</li>
				<li>
					<Form action="/logout" method="post">
						<button>Logout</button>
					</Form>
				</li>
			</ul>
		);
	}

	return <div className={classes.outlet}>{content}</div>;
};

export default ProfileItems;
