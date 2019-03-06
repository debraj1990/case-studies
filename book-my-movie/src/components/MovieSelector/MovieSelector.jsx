import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import './MovieSelector.scss';

const rootClass = 'movie-selector';

const ResultDisplay = ({ value })=> {
	return (
		<div className={`${rootClass}__result-display`}>
			{value}
		</div>
	);
};

ResultDisplay.propTypes = {
	value: PropTypes.string,
}; 

const MoviePoster = ({ movie }) => {
	const nodeClass = `${rootClass}__movie`;
	const { moviePoster, movieName } = movie;

	return (
		<div className={`${nodeClass} col-6`}>
			<div className={`${nodeClass}__item `}>
				<img src={moviePoster} className={`img-responsive ${nodeClass}__item__img`} alt={movieName}></img>
				<div className={`${nodeClass}__item__title`}>{movieName}</div>
			</div>
		</div>
	);
};

MoviePoster.propTypes = {
	movie: PropTypes.object,
}

class MovieSelector extends Component {
	static propTypes = {
		movies: PropTypes.array,
	};

	componentDidMount() {
		this.props.getMovieList();
	}

	renderMovies() {
		const { movies } = this.props;
		const movieList = movies.map(movie => {
			return (
				<React.Fragment key={movie._id}>
					<MoviePoster movie={movie} />
				</React.Fragment>
			);
		});

		return (
			<React.Fragment>
				{movieList}
			</React.Fragment>
		)
	}

	render() {
		return (
			<div className={rootClass}>
				<ResultDisplay value="39 titles in theathers" />
				<Search />
				<div className={`${rootClass}__grid row`}>
					{this.renderMovies()}
				</div>
			</div>
		);
	}
}

export default MovieSelector;