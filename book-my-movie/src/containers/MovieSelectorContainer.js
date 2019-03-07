import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieSelector from './../components/MovieSelector/MovieSelector';
import { getMovieList } from './../stores/movies/movieService';

function mapStateToProps(state) {
	const { movies } = state;
	return {
		movies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getMovieList: bindActionCreators(getMovieList, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelector);