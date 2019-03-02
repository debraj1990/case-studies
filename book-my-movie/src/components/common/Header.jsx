import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {calendar, fileMovieO} from 'react-icons-kit/fa'
import './Header.scss';

const Header = () => {
	return (
			<header className="header">
				<NavLink exact to="/" className="header-movie">
					<Icon icon={fileMovieO} />
					<span className="title">Title</span>
				</NavLink>
				<NavLink to="/screen-time" className="header-timing">
					<Icon icon={calendar} />
					<span className="title">Screen Times</span>
				</NavLink>
			</header>
	);
};

export default Header;