import axios from 'axios';
import { apiBaseUrl } from './../../config';
import { GetMoviesByTheather } from './moviesAction';

export const getMovieList = () => {
	const url = `${apiBaseUrl}/movie/filter`;
	return dispatch => {
		axios.get(url)
		.then(response => {
			dispatch(GetMoviesByTheather(response.data));
		});
	};
};
