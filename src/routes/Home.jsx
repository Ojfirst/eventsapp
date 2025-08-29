import React from 'react';
import { useRouteLoaderData } from 'react-router';
import PageContent from '../components/Home/PageContent';
import HeroSection from '../components/Home/HeroSection';
import Features from '../components/Home/Features';
import Footer from '../components/Home/Footer';

const HomePage = () => {
	const data = useRouteLoaderData('profile');
	console.log(data);

	return (
		<div>
			<PageContent title={'Welcome'}>
				<HeroSection />
				<Features />
				<Footer />
			</PageContent>
		</div>
	);
};

export default HomePage;
