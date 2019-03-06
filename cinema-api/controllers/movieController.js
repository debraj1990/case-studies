var { Theatre, Movie, MovieDate, Event } = require('../../db/model')
var { handleError } = require('../utils')

module.exports = {
	movieCreate: function (req, res, next) {
		//if creating movie - take movie id with associated theatre
		//movie id map with date
		//and add it to events
		var rb = req.body;
		var movie = {
			"movieName": rb.movieName,
			"movieActors": rb.movie_Actors,
			"movieGenre": rb.movie_Genre,
			"movieLanguage": rb.movie_Language,
			"moviePlot": rb.movie_Plot,
			"moviePoster": rb.movie_Poster,
			"movieRatings": rb.movie_Ratings ? JSON.parse(rb.movie_Ratings) : {}
		}
		Movie(movie).save(function (err, movie) {
			if (err) return handleError(err);
			res.json(movie)
		});
	},
	movieEdit: function (req, res, next) {
		//edit movie attributes(other than date) based on id

		//if date editting date based on movie id
		//fetch date id from events 
		//find date from date collection and edit it accordingly.
		const movie = {
			"_hallId": [],
			"_dateId": [],
			"_eventId": [],
			"_theatreId": []
		}
		// const id = req.params.id;
		Movie.findByIdAndUpdate('5c7d5b8644218bef7315259b', movie, {new: true}, function(err, model){
			if (err) return handleError(err);
			res.send(model)
		});
	},
	movieDelete: function (req, res, next) {
		//get movie id
		//delete from movie & event
		const id = req.params.id;
		Movie.deleteOne({ _id: id }, function (err) {
			if (err) return handleError(err);
			res.send("DELETED!!!")
		});
	},
	movieFilter: function (req, res, next) {
		//fetch id from movie collection
		//fetch id of date and theatre & date
		//return data for theatre and date
		const query = req.query;
		const theatreId = query.theatre;
		const searchTerm = query.search;
		const searchdate = query.searchdate;

		if (theatreId && !searchdate) {
			Event.find({ _theatreId: theatreId }, function (err, events) {
				if (err) return handleError(err);
				Movie.find({ '_id': { $in: events.map((v, i) => v._movieId) } }, function (err, movie) {
					if (searchTerm) {
						res.send(movie.filter(data => (data.movieName.indexOf(searchTerm) != -1)))
					} else {
						res.send(movie);
					}
				});
			})
		} else if (searchdate) {
			Event.find({ _theatreId: theatreId }, function (err, events) {
				if (err) return handleError(err);
				MovieDate.find({ '_id': { $in: events.map((v, i) => v._dateId) } }, function (err, date) {
					const datemap = date.map((v, i) => {
						const id = v._id
						return {
							id,
							date: v.dates.map((vv, i) => vv.date).join('|'),
							event: events.filter((data) => (data._dateId.toString() == v._id.toString()))
						}
					})
					Movie.find({ '_id': { $in: datemap.map((v, i) => v.event[0]._movieId) } }, function (err, movies) {
						if (err) return handleError(err);
						res.send(movies);
					})
				});
			})
		} else {
			const id = req.params.id;
			const findIt = id ? { _id: id } : {};
			Movie.find(findIt, function (err, movies) {
				if (err) return handleError(err);
				res.send(movies)
			})
		}
	}
};