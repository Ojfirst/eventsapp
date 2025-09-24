import React, { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayer from './routes/Root';
import HomePage from './routes/Home';
import EventPage from './routes/event/EventPage';
import EventDetailPage from './routes/event/EventDetailPage';
import EventsLoader from './loader-action/EventsLoader';
import EventDetailLoader, {
	EventDetailAction as DeletEventAction,
} from './loader-action/EventDetail';
import NewEventPage from './routes/event/NewEventPage';
import EditEventPage from './routes/event/EditEventPage';
import EventRootLayer from './routes/event/EventRoot';
import ErrorPage from './routes/ErrorPage';
import newEventAction from './loader-action/EventFormAction';
import NewsletterPage from './components/NewsLetter/NewsLetter';
import newsLetterAction from './loader-action/NewLetterAction';
import AuthenticationPage from './routes/authentication/Authentication';
import authAction from './loader-action/authAction';
import tokenLoader, { checkAuthLoader, isAuthenticated } from './util/auth';
import logoutAction from './routes/logout';
import Profile from './routes/profile/ProfileRoot';
import changePasswordAction from './loader-action/ChangePassword';
import EditPasswordPage from './routes/profile/EditPasswordPage';
import AddProfile from './routes/profile/AddProfile';
import EditProfile from './routes/profile/EditProfile';
import addProfileAction from './loader-action/AddProfileAction';
import profileLoader from './loader-action/ProfileLoader';

const router = createBrowserRouter([
	{
		path: '/',
		Component: RootLayer,
		loader: tokenLoader,
		id: 'root',
		errorElement: <ErrorPage />,
		children: [
			{ index: true, Component: HomePage },
			{
				path: 'events',
				Component: EventRootLayer,
				children: [
					{
						index: true,
						Component: EventPage,
						loader: EventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: EventDetailLoader,
						children: [
							{
								index: true,
								Component: EventDetailPage,
								action: DeletEventAction,
							},
							{
								path: 'edit',
								Component: EditEventPage,
								action: newEventAction,
								loader: checkAuthLoader,
							},
						],
					},

					{
						path: 'new',
						Component: NewEventPage,
						action: newEventAction,
						loader: checkAuthLoader,
					},
				],
			},
			{
				path: 'profile',
				id: 'profile',
				Component: Profile,
				loader: profileLoader,
				children: [
					{
						path: 'changePassword',
						Component: EditPasswordPage,
						action: changePasswordAction,
					},
					{
						path: 'new-profile',
						Component: AddProfile,
						action: addProfileAction,
					},
					{ path: 'edit-profile', Component: EditProfile },
				],
			},
			{
				path: 'newsletter',
				Component: NewsletterPage,
				action: newsLetterAction,
			},
			{
				path: 'auth',
				Component: AuthenticationPage,
				action: authAction,
        loader: isAuthenticated,
			},
			{ path: 'logout', action: logoutAction },
			{
				path: 'changePassword',
				Component: EditPasswordPage,
				action: changePasswordAction,
			},
		],
	},
]);

const App = () => {
	return (
		<Fragment>
			<RouterProvider router={router} />
		</Fragment>
	);
};

export default App;
