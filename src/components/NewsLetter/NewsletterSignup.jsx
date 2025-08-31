import { useFetcher } from 'react-router';
import { useRef } from 'react';
import { useEffect } from 'react';

import classes from './NewsletterSignup.module.css';


const NewsletterSignup = () => {
	const emailRef = useRef();
	const fetcher = useFetcher(); // Behind the sense loader and action function
	const { data, state, Form } = fetcher;

	const isSubmitting = state === 'submitting';

	useEffect(() => {
		if (state === 'idle' && data && data.message) {
			window.alert(data.message);
			if (emailRef.current) emailRef.current.value = ''; // rest newsletter input field.
		}
	}, [data, state]);

	return (
		<Form method="post" action="newsletter" className={classes.newsletter}>
			<input
				ref={emailRef}
				type="email"
				placeholder="Sign up for newsletter..."
				aria-label="Sign up for newsletter"
			/>
			<button>{isSubmitting ? 'Submitting' : 'Sign up'}</button>
		</Form>
	);
}

export default NewsletterSignup;
