import React from 'react';
import { Form, useNavigation, useActionData } from 'react-router';

import classes from './ProfileItem.module.css';
import { getUserEmail } from '../../util/auth';

const ProfileItem = () => {
  const data = useActionData(); // Return data of an action
  console.log(data);
	const navigation = useNavigation();
	const userEmail = getUserEmail();

	const isSubmitting = navigation.state === 'submitting';

	console.log(userEmail);

	return (
		<Form className={classes.form} method="POST" action="/profile">
			<ul>
				<li>User email: {userEmail}</li>
			</ul>

			<label htmlFor="password">Change password</label>
			<input type="password" id="password" name="password" required />
			<button type="submit">
				{isSubmitting ? 'Sending...' : 'Change Password'}
			</button>
      {data && (
        <p className={classes.message}>{data}</p>)}
		</Form>
	);
};

export default ProfileItem;
