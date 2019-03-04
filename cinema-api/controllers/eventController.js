var { Theatre, Movie, MovieDate, Event } = require('../../db/model')

module.exports = {
	eventCreate: function (req, res, next) {
		res.send("eventCreate")
	},
	eventEdit: function (req, res, next) {
		res.send("eventEdit")
	},
	eventDelete: function (req, res, next) {
		const id = req.params.id;
		Event.deleteOne({ _id: id }, function (err) {
			if (err) return handleError(err);
			res.send("DELETED!!!")
		});
	},
	eventFilter: function (req, res, next) {
		const findIt = req.params.id ? {_id: id} : {};
		Event.find(findIt, function (err, events) {
			if (err) return handleError(err);
			res.send(events)
		})
	}
};