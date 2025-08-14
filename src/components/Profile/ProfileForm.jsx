import React from 'react';
import { Form, useNavigation } from 'react-router';

import classess from './ProfileForm.module.css';

const ProfileForm = ({ method }) => {
	
	const navigation = useNavigation();

	let isNewUser;
	const isSavingData = navigation.state === 'submitting';


	return (
		<>
			<Form method={method} className={classess.form}>
				<h3 style={{ textAlign: 'center' }}>
					{!isNewUser ? 'Create a profile' : 'Edit profile'}
				</h3>
				<p>
					<label htmlFor="full-name"> Full name</label>
					<input type="text" name="full-name" id="full-name" required />
				</p>
				<p>
					<label htmlFor="contact-emial">Contact email</label>
					<input
						type="email"
						name="contact-emial"
						id="contact-emial"
						required
					/>
				</p>
				<p>
					<label htmlFor="social-link">Social link</label>
					<input type="email" name="social-link" id="social-link" required />
				</p>
				<div className={classess.actions}>
					<button type="button">Cancel</button>
					<button type="button">
						{isSavingData ? 'Saving profile...' : 'Save'}
					</button>
				</div>
			</Form>
		</>
	);
};

export default ProfileForm;
