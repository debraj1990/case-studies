import React from 'react';
import { Route } from 'react-router-dom';
import MoviePage from './MoviePage.jsx';
import ScreenSelectorPage from './ScreenSelectorPage.jsx';
import Header from './../common/Header.jsx';


const HomePage = () => {
	return (
		<div>
			<Header />
			<div className="section">
				<Route exact={true} path="/" component={MoviePage} />
				<Route path="/screen-time" component={ScreenSelectorPage} />
			</div>
		</div>
	);
};

export default HomePage;