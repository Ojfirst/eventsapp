import {
	Form,
	Link,
	useNavigation,
	useSearchParams,
	useActionData,
} from 'react-router';

import classes from './AuthForm.module.css';

function AuthForm() {
	const data = useActionData(); // Return data of an action
	const [searchParams] = useSearchParams();
	const navigation = useNavigation();

	const isLogin = searchParams.get('mode') === 'login';
	const isSubmitting = navigation.state === 'submitting';

	return (
		<>
			<Form method="post" className={classes.form}>
				<h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>

				{data && data.message && (
					<p className={classes.error}>{data.message}</p>
				)}
				{data && typeof data === 'string' && (
					<p className={classes.error}>{data}</p>
				)}
				<p>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" required />
				</p>
				<p>
					<label htmlFor="image">Password</label>
					<input id="password" type="password" name="password" required />
				</p>
				<div className={classes.links}>
					<div className={classes.actions}>
						<Link to={'../changePassword'}>Forgot password</Link>
					</div>
					<div className={classes.actions}>
						<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
							{isLogin ? 'Create new user' : 'Login'}
						</Link>
						<button disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Send'}
						</button>
					</div>
				</div>
			</Form>
		</>
	);
}

export default AuthForm;
