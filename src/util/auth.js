import { redirect } from 'react-router';

const gettokenExpiration = () => {
	const storedExpirationDate = localStorage.getItem('expiration');
	if (!storedExpirationDate) return;

	// convert to date object
	const expirationDate = new Date(storedExpirationDate);
	const now = new Date();
	const duration = expirationDate.getTime() - now.getTime();
	return duration;
};

const getUserEmail = () => {
  const email = localStorage.getItem('email');
  if (!email) return;
  return email;
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

const checkAuthLoader = () => {
	const token = getAuthToken();
	if (!token) {
		return redirect('/auth');
	}
};

export { getAuthToken, gettokenExpiration, checkAuthLoader, getUserEmail };
export default tokenLoader;
