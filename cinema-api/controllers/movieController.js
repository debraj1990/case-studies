var { Theatre, Movie, MovieDate, Event } = require('../../db/model')
var { handleError } = require('../utils')

module.exports = {
	movieCreate: function (req, res, next) {
		//if creating movie - take movie id with associated theatre
		//movie id map with date
		//and add it to events
		var rb = req.body;
		console.log(JSON.stringify(rb))
		var movie = {
			"_theatreId": rb._theatreId,
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
			// console.log(movie);
			var dates = {
				"_movieId": movie._id,
				"dates": rb.dates
			}
			MovieDate(dates).save(function (err, date) {
				if (err) return handleError(err);
				// console.log(date);
				var event = {
					_theatreId: rb._theatreId,
					_movieId: movie._id,
					_dateId: date._id
				}
				Event(event).save(function (err, evt) {
					if (err) return handleError(err);
					res.json({
						"movie": movie,
						"dates": date,
						"event": evt
					})
				});
			});
		});
	},
	movieEdit: function (req, res, next) {
		//edit movie attributes(other than date) based on id

		//if date editting date based on movie id
		//fetch date id from events 
		//find date from date collection and edit it accordingly.
		res.send("movieEdit")
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
		const findIt = req.params.id ? {_id: id} : {};
		Movie.find(findIt, function (err, movies) {
			if (err) return handleError(err);
			res.send(movies)
		})
	}
};