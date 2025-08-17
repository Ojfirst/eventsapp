import { redirect } from 'react-router';
import { getAuthToken, getUserEmail } from '../util/auth';

const addProfileAction = async ({ request }) => {
	try {
		const token = getAuthToken();
    const userEmail= getUserEmail();

		const data = await request.formData();

		const fullName = data.get('full-name');
		const interest = data.get('interest');
		const socialLink = data.get('social-link');

		if (!token ) {
			throw new Response(JSON.stringify({ message: 'Unauthorized' }), {
				status: 401,
			});
		}

		if (!fullName && !interest && socialLink) {
			throw new Response(JSON.stringify({ message: 'No data found' }));
		}

		const userProfileData = {
			fullName: fullName,
			interest: interest,
			socialLink: socialLink,
      userEmail: userEmail
		};

		const method = request.method;

		let url =
			'https://events-d92e9-default-rtdb.europe-west1.firebasedatabase.app/user-profile.json';

		const response = await fetch(url, {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userProfileData),
		});

		if (!response.ok) {
			throw new Error('Could not save profile, Please try again')
		}
		if (response.status === 422) {
			const errorData = await response.json();
			return errorData;
		} else {
			return redirect('/profile');
		}
	} catch (error) {
		if (error instanceof TypeError) {
			return { message: 'Unknow error or check your internet connection' };
		} else {
			return { message: error.message || 'An unexpected error occurred' };
		}
	}
};

export default addProfileAction;
