import { redirect } from 'react-router';
import { getAuthToken } from '../util/auth';

const changePasswordAction = async ({ request }) => {
	try {
		const data = await request.formData();
		const newPassword = data.get('new-password');
		const confirmPasswoord = data.get('confrim-password'); // TODO

		// TODO
		if (newPassword !== confirmPasswoord) {
			throw new Response(JSON.stringify({ message: 'Password mismatch' }));
		}

		// Validate passwords
		if (!newPassword || newPassword.length < 6) {
			throw new Response(JSON.stringify({ message: 'Invalid password input' }));
		}

		const token = getAuthToken();
		if (!token) {
			throw new Response(JSON.stringify({ message: 'Not authenticated' }), {
				status: 401,
			});
		}

		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCSZYvIiQRhl8FSSFDsSPoXZcjH2zNCCAA',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					idToken: token,
					password: newPassword,
					returnSecureToken: true,
				}),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
      if (errorData && errorData.error && errorData.error.message) {
        return errorData.error.message || 'Failed to change password';
      } else {
        return {message: 'An unknown error occured.'}
      }
		}

		const responseData = await response.json();
		if (responseData.ok) return 'Password changed successfully';
		// TODO
		return redirect('auth');
	} catch (error) {
		if (error instanceof TypeError) {
			return { message: 'An unknown error occurred!' };
		} 
			return {message: error.message || 'An unexpected error occurred'};
	}
};

export default changePasswordAction;
