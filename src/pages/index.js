import '../styles/base.css';

import React from 'react';
import Helmet from 'react-helmet';

import About from '../components/About';
import Intro from '../components/Intro';

export default function Index() {
	return (
		<>
			<Helmet>
				<title>Chiel Kunkels</title>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:300,400|Ubuntu:700" />
			</Helmet>
			<Intro />
			<About />
		</>
	);
}
