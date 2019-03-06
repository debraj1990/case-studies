var { Theatre, Movie, MovieDate, Event } = require('../../db/model')

module.exports = {
	eventCreate: function (req, res, next) {
		var rb = req.body;
		var dates = {
			"dates": rb.dates
		}
		MovieDate(dates).save(function (err, date) {
			if (err) return handleError(err);
			var event = {
				_theatreId: rb._theatreId,
				_movieId: rb._movieId,
				_hallId: rb._id,
				_dateId: date._id
			}
			Event(event).save(function (err, evt) {
				if (err) return handleError(err);
				Movie.findByIdAndUpdate(rb._movieId, { 
					$push: { _theatreId: rb._theatreId, _dateId: date._id, _eventId: evt._id } 
				}, {new: true}, function (err, movie) {
					if (err) return handleError(err);
					res.json({
						"dates": date,
						"event": evt
					})
				});
			});
		});
	},
	eventEdit: function (req, res, next) {
		res.send("eventEdit")
	},
	eventDelete: function (req, res, next) {
		// const id = req.params.id;
		// Event.deleteOne({ _id: id }, function (err) {
		// 	if (err) return handleError(err);
		// 	res.send("DELETED!!!")
		// });
		Event.deleteMany({}, function (err) {
			if (err) return handleError(err);
			MovieDate.deleteMany({}, function (err) {
				if (err) return handleError(err);
				res.send("DELETED!!!")
			});
		});
	},
	eventFilter: function (req, res, next) {
		const findIt = req.params.id ? {_id: id} : {};
		Event.find(findIt, function (err, events) {
			if (err) return handleError(err);
			MovieDate.find(findIt, function (err, dates) {
				if (err) return handleError(err);
				res.send({
					event: events,
					date: dates
				})
			})
		})
	}
};