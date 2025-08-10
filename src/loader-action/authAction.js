import { redirect } from 'react-router';

const authAction = async ({ request }) => {
  // Parse the URL to get the mode (login or signup)
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
			return errorData.error.message;
		}
	}

	if (mode === 'signup' && response.ok) {
		return redirect('?mode=login');
	} else if (mode === 'login' && response.ok) {
		const responseData = await response.json();
		const token = responseData.idToken;
		if (responseData && responseData.email && token && responseData.localId) {
      // Store token and user ID in local storage
			localStorage.setItem('token', token);
			localStorage.setItem('userId', responseData.localId);
      localStorage.setItem('email', responseData.email);
      // Set expiration date for the token
			const expirationDate = new Date(
        new Date().getTime() + +responseData.expiresIn * 1000 // Convert seconds to milliseconds
      );  
      localStorage.setItem('expiration', expirationDate.toISOString());
			return redirect('/');
		}
	}
};

export default authAction;
