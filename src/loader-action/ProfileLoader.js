import React from 'react';
import { getAuthToken } from '../util/auth';

const profileLoader = async () => {
	const token = getAuthToken();
  if (!token || token === 'Expired') {  
    return { message: 'You are not authenticated' };
  }
  if (token === 'Expired') {
    return { message: 'Your session has expired, please log in again' };
  }
  
	try {
		const response = await fetch(
			'https://events-d92e9-default-rtdb.europe-west1.firebasedatabase.app/user-profile.json'
		);

    console.log('Fetching profile data...');

		if (!response.ok) {
			const errorData = await response.json();
			if (errorData && errorData.error && errorData.error.message) {
				return { message: errorData.error.message };
			}
		}

		const respData = await response.json();
		console.log(respData);
    return respData || { message: 'No profile data found' };
	} catch (error) {
		if (error instanceof TypeError) {
			return { message: 'Please check your connection' };
		}
		return { message: error.message };
	}
};
export default profileLoader;
