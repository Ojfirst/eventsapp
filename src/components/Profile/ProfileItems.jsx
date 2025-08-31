import React from 'react';
import { useRouteLoaderData, Link, Form } from 'react-router';
import { getUserEmail } from '../../util/auth';

import classes from './ProfileItems.module.css';

const ProfileItems = () => {
	const data = useRouteLoaderData('profile');

	let content;

	if (!data || typeof data !== 'object') {
		content = <p>No profile found</p>;
	}

	const storedEmail = getUserEmail();

	let userEmail = Object.values(data).find(
		(profile) => profile.userEmail === storedEmail
	)?.userEmail;

	if (!userEmail || userEmail !== storedEmail) {
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

	// Single user profile item rendering
	const ProfileItems = Object.values(data)
		.filter((profile) => profile.userEmail === userEmail)
		.map((profile) => (
			<div key={profile.id} className={classes.container}>
				<h2>Profile</h2>
				<h4>{profile.userEmail}</h4>
				<p>
					Fullname: <span className={classes.data}>{profile.fullName}</span>
				</p>
				<p>
					Interest: <span className={classes.data}>{profile.interest}</span>
				</p>
				<p>
					Social Link:{' '}
					<span className={classes.data}>{profile.socialLink}</span>
				</p>
				<p>
					Created at:{' '}
					<span className={classes.data}>
						{profile.date}, {profile.time}
					</span>
				</p>
				<ul>
					<li>
						<Link to="edit-profile">Edit profile</Link>
					</li>
					<li>
						<Link to="changePassword">Edit Password</Link>
					</li>
					<li>
						<Form action="/logout" method="post">
							<button>Logout</button>
						</Form>
					</li>
				</ul>
			</div>
		));

	if (ProfileItems.length > 0) {
		content = ProfileItems;
	}

	return <div style={{ paddingTop: '10rem' }}>{content}</div>;
};

export default ProfileItems;
