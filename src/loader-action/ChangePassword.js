import { getAuthToken } from '../util/auth';

const changePasswordAction = async ({ request }) => {
	const data = await request.formData();
	const currentPassword = data.get('password');

	// Validate passwords
	if (!currentPassword || currentPassword.length < 6) {
		return { message: 'Invalid password input' };
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
				password: currentPassword,
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
};

export default changePasswordAction;
