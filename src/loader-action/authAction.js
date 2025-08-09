import { redirect } from 'react-router';

const authAction = async ({ request }) => {
	const url = new URL(request.url);
	const mode = (url.searchParams.get('mode') || 'login').toLowerCase();

	if (mode !== 'login' && mode !== 'signup') {
		throw new Response(JSON.stringify({ message: 'Unsupported mode' }), {
			status: 422,
		});
	}

	const data = await request.formData();
	const email = data.get('email');
	const password = data.get('password');

	// Choose endpoint based on mode
	const endpoint =
		mode === 'signup'
			? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSZYvIiQRhl8FSSFDsSPoXZcjH2zNCCAA'
			: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSZYvIiQRhl8FSSFDsSPoXZcjH2zNCCAA';

	const response = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email,
			password,
			returnSecureToken: true,
		}),
	});

	if (!response.ok) {
		const errorData = await response.json();
		if (errorData && errorData.error && errorData.error.message) {
			console.log(errorData.error.message);
			return errorData.error.message;
		}
	}

	if (mode === 'signup' && response.ok) {
		return redirect('?mode=login');
	} else if (mode === 'login' && response.ok) {
		const responseData = await response.json();
		const token = responseData.idToken;
		if (responseData && responseData.localId && token) {
			console.log('Login successful:', responseData.localId);
			localStorage.setItem('token', token);
			localStorage.setItem('userId', responseData.localId);

			const expiration = new Date();
			expiration.setMinutes(expiration.getMinutes() + 30);
			localStorage.setItem('Expiration', expiration.toISOString());

			return redirect('/');
		}
	}
};

export default authAction;
