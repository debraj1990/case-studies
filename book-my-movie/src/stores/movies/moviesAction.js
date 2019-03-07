import { GET_MOVIES } from './movieConstant';

export const GetMoviesByTheather = (movies) => ({
	type: GET_MOVIES,
	movies
});
