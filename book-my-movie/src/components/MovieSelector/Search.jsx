import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/fa/search'
import './Search.scss';

const rootClass = 'search';

class Search extends Component {
	render() {
		return (
			<form className={rootClass}>
				<div className={`${rootClass}__icon`}>
					<Icon icon={search} />
				</div>
				<input type="text" className={`${rootClass}__search-field`} placeholder="Search by title name" />
			</form>
		);
	}
}

Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default Search;