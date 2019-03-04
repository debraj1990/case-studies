var { Theatre, Movie, MovieDate, Event } = require('../../db/model')
var { handleError } = require('../utils')

module.exports = {
	movieCreate: function (req, res, next) {
		//if creating movie - take movie id with associated theatre
		//movie id map with date
		//and add it to events
		var rb = req.body;
		console.log(JSON.stringify(rb))
		// var movie = {
		// 	"_theatreId": rb._theatreId,
		// 	"movieName": rb.movieName,
		// 	"movieRating": rb.movieRating,
		// 	"dates": []
		// }
		// Movie(movie).save(function (err, movie) {
		// 	if (err) return handleError(err);
		// 	console.log(movie);
		// 	var dates = {
		// 		"date": "",
		// 		"timing": [
		// 			{
		// 				"time": "",
		// 				"hall": "",
		// 				"seats_available": [],
		// 				"total_seats": []
		// 			}
		// 		]
		// 	}
		// 	MovieDate(dates).save(function (err) {
		// 		if (err) return handleError(err);
		// 		res.json("dasdfasd")
		// 	});
		// });
		res.send("movieCreate")
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