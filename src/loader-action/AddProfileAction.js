import { redirect, useNavigate } from "react-router";
import { getAuthToken } from "../util/auth";

const addProfileAction = async ({ request }) => {
	try {
    const token = getAuthToken()
		const data = await request.formData();

		const fullName = data.get('full-name');
		const contactEmail = data.get('contact-email');
		const socialLink = data.get('social-link');

    if (!token) {
      throw new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

		if (!fullName && !contactEmail && socialLink) {
			throw new Response(JSON.stringify({ message: 'No data found' }));
		}

		const userProfileData = {
			fullName: fullName,
			contactEmail: contactEmail,
			socialLink: socialLink,
		};

		const method = request.method;

		let url =
			'https://events-d92e9-default-rtdb.europe-west1.firebasedatabase.app/user-profile.json';

		const response = await fetch(url, {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userProfileData),
		});

		if (!response.ok) {
			throw new Response(
        JSON.stringify({ message: 'Could not save profile, Please try again' }),
        { status: 500 }
      );
		}
    if (response.status === 422) {  
      const errorData = await response.json();
      return errorData;
    } else {  
      return redirect('/profile');
    }


	} catch (error) {
		if (error instanceof TypeError) {
			return { message: 'Unknow error or check your internet connection' };
		} else {
			return { message: error.message || 'An unexpected error occurred' };
		}
	}
};

export default addProfileAction;
