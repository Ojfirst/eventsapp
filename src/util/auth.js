import { redirect } from 'react-router';

const gettokenExpiration = () => {
	const storedExpirationDate = localStorage.getItem('expiration');
	if (!storedExpirationDate) return;

	// convert to date object
	const expirationDate = new Date(storedExpirationDate);
	const now = new Date();
	const remainingDuration = expirationDate.getTime() - now.getTime();
  console.log(remainingDuration);
	return remainingDuration;
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
	if (tokenDuration <= 0) {
    localStorage.clear();
		return redirect('/auth');
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

const isAuthenticated = () => {
  const token = getAuthToken();

  if (token) {
    return redirect('/');
  }
}

export { getAuthToken, gettokenExpiration, checkAuthLoader, getUserEmail, isAuthenticated };
export default tokenLoader;
