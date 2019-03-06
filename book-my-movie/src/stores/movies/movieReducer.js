import { GET_MOVIES } from './movieConstant';

export const moviesListReducer = (initialState = [], action) => {
	switch(action.type) {
		case GET_MOVIES:
			return action.movies;
		
		default:
			return initialState;
	};
};
