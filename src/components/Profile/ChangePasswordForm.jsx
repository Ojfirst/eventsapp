import React from 'react';
import { Form, useNavigation, useActionData } from 'react-router';
import { getUserEmail } from '../../util/auth';

import classes from './ChangePasswordForm.module.css';

const ChangePasswordForm = () => {
	const data = useActionData(); // Return data of an action
	console.log(data);
	const navigation = useNavigation();
	const userEmail = getUserEmail();

	const isSubmitting = navigation.state === 'submitting';

	return (
		<Form className={classes.form} method="POST" action="/profile">
			{userEmail && <p>User email: {userEmail}</p>}

			{!userEmail && (
				<input
					type="email"
					id="email"
					name="email"
					autoFocus
					autoComplete="email"
					placeholder="Email"
					required
				/>
			)}

			<input
				type="password"
				id="new-password"
				name="new-password"
				autoFocus
				autoComplete="password"
				placeholder="New password"
				required
			/>
			<input
				type="password"
				id="confirm-password"
				name="confrim-password"
				autoFocus
				autoComplete="password"
				placeholder="Confirm password"
				required
			/>
			<button type="submit">
				{isSubmitting ? 'Sending...' : 'Change Password'}
			</button>
			{data && typeof data === 'string' && (
				<p className={classes.message}>{data}</p>
			)}

			{data && data.message && <p>{data.message}</p>}
		</Form>
	);
};

export default ChangePasswordForm;
