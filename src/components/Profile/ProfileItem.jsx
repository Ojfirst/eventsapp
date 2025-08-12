import React from 'react';
import { Form, useNavigation, useActionData } from 'react-router';
import { getUserEmail } from '../../util/auth';

import classes from './ProfileItem.module.css';

const ProfileItem = () => {
	const data = useActionData(); // Return data of an action
	const navigation = useNavigation();
	const userEmail = getUserEmail();

	const isSubmitting = navigation.state === 'submitting';

	console.log(userEmail);

	return (
		<Form className={classes.form} method="POST" action="/profile">
			<p>User email: {userEmail}</p>

			<label htmlFor="password">Change password</label>
			<input
				type="password"
				id="new-password"
				name="new-password"
				autoFocus
				autoComplete="email"
				placeholder="New password"
				required
			/>
			<input
				type="password"
				id="confirm-password"
				name="confrim-password"
				autoFocus
				autoComplete="email"
				placeholder="Confirm password"
				required
			/>
			<button type="submit">
				{isSubmitting ? 'Sending...' : 'Change Password'}
			</button>
			{data && <p className={classes.message}>{data}</p>}
		</Form>
	);
};

export default ProfileItem;
