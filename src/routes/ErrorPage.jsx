import React from 'react';
import { useRouteError } from 'react-router';

import MainNavigation from '../components/Home/MainNavigation';
import PageContent from '../components/Home/PageContent';
import Footer from '../components/Home/Footer';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not found';
    message= 'Could not load resources or page'
  }

	return (
		<>
			<MainNavigation />
			<main style={{'padding': '10rem', 'minHeight': '100vh'}}>
				<PageContent title={title}>
					<p>{message}</p>
				</PageContent>
			</main>
      <Footer />
		</>
	);
};

export default ErrorPage;
