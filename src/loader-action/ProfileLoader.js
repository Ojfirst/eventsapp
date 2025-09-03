import { getAuthToken } from '../util/auth';

const profileLoader = async () => {
	const token = getAuthToken();
	if (!token || token === 'Expired') {
		const message =
			token === 'Expired'
				? 'Your session has expired, please log in again.'
				: 'You are not authenticated.';
		return { message };
	}

	try {
		const response = await fetch(
			'https://events-d92e9-default-rtdb.europe-west1.firebasedatabase.app/user-profile.json'
		);

		if (!response.ok) {
			// By returning here, we prevent trying to read the response body twice.
			return { message: 'Could not fetch profile data.' };
		}

		const respData = await response.json();

		if (!respData || Object.keys(respData).length === 0) {
			return {};
		}

		return respData;
	} catch (error) {
		// This will catch network errors (e.g., no internet connection).
		if (error instanceof TypeError) {
			return { message: 'Please check your connection' };
		}
		return { message: error.message || 'An unknown error occurred.' };
	}
};
export default profileLoader;
