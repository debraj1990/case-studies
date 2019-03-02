import React, { PureComponent } from 'react';
import moment from 'moment';
import './DaySelector.scss';

class DaySelector extends PureComponent {
	static initialState = {
		selectedDay: null,
		selectedSlot: null,
	}
	constructor() {
		super();
		this.state = DaySelector.initialState;
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

	renderDays() {
		const { days } = this.props;
		const daysElem = days.map((elem, index) => {
			return (
				<div key={index} className="day">
					<div className="day-tile" onClick={e=>this.handleDaySelect(elem)}>
						{elem.day}
					</div>
				</div>
			)
		});
		return (
			<div className="day-selector__section__list">
				{daysElem}
			</div>
		)
	}

	renderTimings() {
		const { timings } = this.props;
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
		)
	}
	

	render() {
		const { selectedDay } =this.state;

		return (
			<div className="day-selector">
				{this.renderSelectedDay()}
				<div className="day-selector__section">
				
					{(selectedDay)
						? this.renderTimings()
						: this.renderDays()
					}
				</div>
			</div>
			
		);
	}
}

export default DaySelector;