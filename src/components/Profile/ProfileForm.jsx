import React from 'react';
import { Form, useActionData, useNavigation, useNavigate } from 'react-router';

import classess from './ProfileForm.module.css';

const ProfileForm = ({ method }) => {
	const data = useActionData();
	console.log(data);

	const navigation = useNavigation();
  const navigate = useNavigate();

	let isNewUser;
	const isSavingData = navigation.state === 'submitting';

  const handleCancel = () => {
    navigate('..')
  }

	return (
		<Form method={method} className={classess.form}>
			<h3 style={{ textAlign: 'center' }}>
				{!isNewUser ? 'Create a profile' : 'Edit profile'}
			</h3>
			<p>
				<label htmlFor="full-name"> Full name</label>
				<input type="text" name="full-name" id="full-name" required />
			</p>
			<p>
				<label htmlFor="contact-email">Contact email</label>
				<input type="email" name="contact-email" id="contact-email" required />
			</p>
			<p>
				<label htmlFor="social-link">Social link</label>
				<input type="email" name="social-link" id="social-link" required />
			</p>
			<div className={classess.actions}>
				<button type="button" onClick={handleCancel}>Cancel</button>
				<button>{isSavingData ? 'Saving profile...' : 'Save'}</button>
			</div>
		</Form>
	);
};

export default ProfileForm;
