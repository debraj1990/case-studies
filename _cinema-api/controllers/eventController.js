var { Theatre, Movie, MovieDate, Event } = require('../../db/model')

module.exports = {
	eventCreate: function (req, res, next) {
		res.send("eventCreate")
	},
	eventEdit: function (req, res, next) {
		res.send("eventEdit")
	},
	eventDelete: function (req, res, next) {
		res.send("eventDelete")
	},
	eventFilter: function (req, res, next) {
		res.send("eventFilter")
	}
};