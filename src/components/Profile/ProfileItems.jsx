import React from 'react';
import { useRouteLoaderData } from 'react-router';
import { getUserEmail } from '../../util/auth';

import classes from './ProfileItems.module.css';

const ProfileItems = () => {
	const data = useRouteLoaderData('profile');

	if (!data || typeof data !== 'object') {
		return <p>No profile found</p>;
	}

	const storedEmail = getUserEmail();

	let userEmail = Object.values(data).find(
		(profile) => profile.userEmail === storedEmail
	)?.userEmail;


	if (!userEmail || userEmail !== storedEmail) {
		return <p>You do not have permission to view this profile.</p>;
	}

	// Single user profile item rendering
	const ProfileItems = Object.values(data)
		.filter((profile) => profile.userEmail === userEmail)
		.map((profile) => (
			<div key={profile.id} className={classes.container}>
				<h2>Profile</h2>
				<p>Fullname: {profile.fullName}</p>
        <p>Interest: {profile.interest}</p>
				<p>Email: {profile.userEmail}</p>
        <p>Social Link: {profile.socialLink}</p>
        <p>Created at: {new Date(profile.createdAt).toLocaleDateString()}</p>
			</div>
		));

	return <div>{ProfileItems}</div>;
};

export default ProfileItems;
