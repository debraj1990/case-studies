import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ScreenSelector.scss';

/**
 * SLOT SELECTOR COMPONENT
 * @param {*} param0 
 */
const SlotSelector = ({ timings }) => {
	const slotElem = timings.map((slot, index) => {
		return (
			<div key={index} className="day">
				<div className="day-tile">
					{slot}
				</div>
			</div>
		)
	});

	return (
		<div className="day-selector__section__list">
			{slotElem}
		</div>
	)
};

SlotSelector.propTypes = {
	timings: PropTypes.array.isRequired,
}


/**
 * Day Selector Component
 * @param {Day Select} param0 
 */

const DaySelector = ({ days, handleDaySelect }) => {
	const daysElem = days.map((elem, index) => {
		return (
			<div key={index} className="day">
				<div className="day-tile" onClick={e => handleDaySelect(elem)}>
					{elem.day}
				</div>
			</div>
		)
	});

	return (
		<div className="day-selector__section__list">
			{daysElem}
		</div>
	);
}

DaySelector.propTypes = {
	days: PropTypes.array.isRequired,
};

/**
 * SCREEN SELECTOR COMPONENT
 */
class ScreenSelector extends PureComponent {
	static propTypes = {
		days: PropTypes.array.isRequired,
		timings: PropTypes.array.isRequired,
	}

	static initialState = {
		selectedDay: null,
		selectedSlot: null,
	}
	constructor() {
		super();
		this.state = ScreenSelector.initialState;
		this.handleDaySelect = this.handleDaySelect.bind(this);
		this.removeSelectedDate = this.removeSelectedDate.bind(this);
	}

	componentDidMount() {
		const { getDays } = this.props;
		getDays();
	}

	handleDaySelect(selectedDay) {
		this.setState({
			selectedDay,
		});
		this.props.getTiming();
	}

	removeSelectedDate() {
		this.setState({
			selectedDay: null,
		});
	}

	renderSelectedDay() {
		const { selectedDay } = this.state;
		if(!selectedDay){
			return null;
		}
		return (
			<div className="bg-info day-selector__selected-day">
				{selectedDay.day}
				<button
				type="button"
				className="close"
				aria-label="Close"
				onClick={this.removeSelectedDate}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
	}

	render() {
		const { selectedDay } =this.state;
		const { timings, days } = this.props;

		return (
			<div className="day-selector">
				{this.renderSelectedDay()}
				<div className="day-selector__section">
					{(selectedDay)
						? <SlotSelector timings={timings} />
						: <DaySelector days={days} handleDaySelect={this.handleDaySelect}/>
					}
				</div>
			</div>
			
		);
	}
}

export default ScreenSelector;