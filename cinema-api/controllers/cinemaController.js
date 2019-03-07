const { Theatre, Movie, MovieDate, Event, Hall } = require('../../db/model')
const { handleError } = require('../utils')

module.exports = {
	cinemaFilter: function (req, res, next) {
		//find filter with id from filter collection

		const id = req.query.id;
		const type = req.query.type;
		const findIt = id ? {_id: id} : {};

		switch (type) {
			case "theatre": {
				Theatre.find(findIt, function (err, theatres) {
					if (err) return handleError(err);
					res.send(theatres)
				})
				break;
			}
			case "movie": {
				Movie.find(findIt, function (err, movies) {
					if (err) return handleError(err);
					res.send(movies)
				})
				break;
			}
			case "date": {
				MovieDate.find(findIt, function (err, dates) {
					if (err) return handleError(err);
					res.send(dates)
				})
				break;
			}
			case "event": {
				Event.find(findIt, function (err, events) {
					if (err) return handleError(err);
					res.send(events)
				})
				break;
			}
			case "hall": {
				Hall.find(findIt, function (err, halls) {
					if (err) return handleError(err);
					res.send(halls)
				})
				break;
			}
			default: {
				Theatre.find(findIt, function (err, theatres) {
					if (err) return handleError(err);
					Movie.find(findIt, function (err, movies) {
						if (err) return handleError(err);
						MovieDate.find(findIt, function (err, dates) {
							if (err) return handleError(err);
							Event.find(findIt, function (err, events) {
								if (err) return handleError(err);
								Hall.find(findIt, function (err, halls) {
									if (err) return handleError(err);
									res.send({
										theatre: theatres,
										movie: movies,
										date: dates,
										hall: halls,
										event: events
									})
								})
							})
						})
					})
				})
				break;
			}
		}
	}
};