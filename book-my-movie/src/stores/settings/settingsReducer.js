import { combineReducers } from 'redux';
import settings from './settingsConstant';

export const daysReducer = (initalState=[], action) => {
	switch(action.type){
		case settings.GET_DAYS:
			return action.weeks;
		default:
			return initalState;
	}
};

export const timingReducer = (initalState=[], action) => {
	switch(action.type) {
		case settings.GET_TIMING:
			return action.timings;
		default:
			return initalState;
	}
};

export default combineReducers({
	days: daysReducer,
	timings: timingReducer,
});
