import { redirect } from 'react-router';
import { getAuthToken } from '../util/auth';

const changePasswordAction = async ({ request }) => {
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
		return errorData.error.message || 'Failed to change password';
	}

	const responseData = await response.json();
	if (responseData) return 'Password changed successfully';
  // TODO
  return redirect('auth')
};

export default changePasswordAction;
