
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MappingSchema = new mongoose.Schema({
    theaterId: String,
    movie: Number,
    audi: String,
    date: String,
    time:String,
    price:Number
}); 


var Mapping = mongoose.model('mapping', MappingSchema, 'Mapping');
module.exports = Mapping;