var { Theatre, Movie, MovieDate, Event } = require('../../db/model')
var { handleError } = require('../utils')

module.exports = {
	theatreCreate: function (req, res, next) {
		//no need to add event while creating theatre
		const rb = req.body;
		const theatre = {
			"theatreName": rb.theatreName,
			"theatreAddress": rb.theatreAddress,
			"location": {
				"lat": rb.location.latitude || "",
				"long": rb.location.longitude || ""
			}
		}
		Theatre(theatre).save(function (err, theatres) {
			if (err) return handleError(err);
			res.json(theatres)
		});
	},
	theatreEdit: function (req, res, next) {
		//edit theatre based on id
		const rb = req.body;
		const theatre = {
			"theatreName": rb.theatreName,	
			"theatreAddress": rb.theatreAddress,
			"location": {
				"lat": rb.location.latitude || "",
				"long": rb.location.longitude || ""
			}
		}
		const id = req.params.id;
		Theatre.findByIdAndUpdate(id, theatre, {new: true}, function(err, model){
			if (err) return handleError(err);
			res.send(model)
		});
	},
	theatreDelete: function (req, res, next) {
		//delete filter from id
		const id = req.params.id;
		Theatre.deleteOne({ _id: id }, function (err) {
			if (err) return handleError(err);
			res.send("DELETED!!!")
		});
	},
	theatreFilter: function (req, res, next) {
		//find filter with id from filter collection
		const findIt = req.params.id ? {_id: id} : {};
		Theatre.find(findIt, function (err, theatres) {
			if (err) return handleError(err);
			res.send(theatres)
		})
	}
};