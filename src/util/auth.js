const gettokenExpiration = () => {
	const storedExpirationDate = localStorage.getItem('Expiration');
	if (!storedExpirationDate) return;

	// convert to date object
	const expirationDate = new Date(storedExpirationDate);
	const now = new Date();
	const duration = expirationDate.getTime() - now.getTime();
	return duration;
};

const getAuthToken = () => {
	const token = localStorage.getItem('token');

	if (!token) return;

	const tokenDuration = gettokenExpiration();
	if (tokenDuration < 0) {
		return 'Expired';
	}

	return token;
};

const tokenLoader = () => {
	return getAuthToken();
};

export { tokenLoader, gettokenExpiration };
export default getAuthToken;
