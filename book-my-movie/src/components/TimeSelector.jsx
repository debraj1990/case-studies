import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DaySelector from './DaySelector';

class TimeSelector extends Component {
	render() {
		return (
			<div>
				<DaySelector />
			</div>
		);
	}
}

TimeSelector.propTypes = {

};

export default TimeSelector;