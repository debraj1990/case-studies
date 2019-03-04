
var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const theatreSchema = Schema({
    _tid: Schema.Types.ObjectId,
    _movieId: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    theatreName: String,
    theatreAddress: String,
    location: {
        lat: String,
        long: String
    }
});

const movieSchema = Schema({
    _mid: Schema.Types.ObjectId,
    _theatreId: [{ type: Schema.Types.ObjectId, ref: 'Theatre' }],
    movieName: String,
    movieActors: String,
    movieGenre: String,
    movieLanguage: String,
    moviePlot: String,
    moviePoster: String,
    movieRatings: Object
});

const reviewSchema = Schema({
    _rid: Schema.Types.ObjectId,
    _movieId: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    review: [{
        _rid: Schema.Types.ObjectId,
        review: String,
        stars: Number
    }]
});

const dateSchema = Schema({
    _did: Schema.Types.ObjectId,
    _movieId: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    dates: [
        {
            date: String,
            timing: [
                {
                    time: String,
                    hall: String,
                    seats_available: [String],
                    total_seats: Number
                }
            ]
        }
    ]
});

const eventSchema = Schema({
    _eid: Schema.Types.ObjectId,
    _theatreId: [{ type: Schema.Types.ObjectId, ref: 'Theatre' }],
    _movieId: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    _dateId: [{ type: Schema.Types.ObjectId, ref: 'Date' }],
}); 

const Theatre = mongoose.model('Theatre', theatreSchema);
const Movie = mongoose.model('Movie', movieSchema);
const MovieDate = mongoose.model('Date', dateSchema);
const Review = mongoose.model('Review', reviewSchema);
const Event = mongoose.model('Event', eventSchema);

/*
const theatre = new Theatre({
    _id: new mongoose.Types.ObjectId(),
    name: 'PVR LOGIX',
    address: 'Logix, Wave City Center, BW-58, Sector 32, Noida, Uttar Pradesh 201301'
});

theatre.save(function (err) {
    if (err) return handleError(err);

    const movie1 = new Movie({
        name: 'Casino Royale',
        theatre: theatre._id    // assign the _id from the person
    });

    movie1.save(function (err) {
        if (err) return err;
        // thats it!
        console.log(movie1)
    });
});
*/

module.exports = {
    Theatre,
    Movie,
    MovieDate,
    Review,
    Event
};

//MOVIE TEMPLATE

// const movie = [
//     {
//         name: "Thor",
//         rating: 4.5,
//         theatre: [
//             {
//                 name: "PVR Logix",
//                 address: "Logix, Wave City Center, BW-58, Sector 32, Noida, Uttar Pradesh 201301",
//                 dates: [
//                     {
//                         date: "03/03/2019",
//                         timing: [
//                             {
//                                 time: "10:00",
//                                 hall: "AUDI-03",
//                                 seats_available: ["A3", "A4", "A5", "A6", "A7", "A8", "A9",
//                                     "B1", "B5", "B6", "B7", "B8", "B9",
//                                     "C1", "C2", "F7", "F8", "F9",
//                                     "G1", "G5", "G6", "G7", "G8", "G9",
//                                     "H1", "H2", "H7", "H8", "H9",
//                                     "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9",
//                                     "J1", "J2", "J3", "J4"],
//                                 total_seats: 40
//                             },
//                             {
//                                 time: "12:00",
//                                 hall: "AUDI-11",
//                                 seats_left_gold: 10,
//                                 seats_left_silver: 5,
//                                 total_seats: 30
//                             },
//                             {
//                                 time: "15:00",
//                                 hall: "AUDI-03",
//                                 seats_left_gold: 2,
//                                 seats_left_silver: 5,
//                                 total_seats: 30
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ],
//         reviews: [
//             "Review 1",
//             "Review 2"
//         ]
//     }
// ]



// const theatre = [
//     {
//         name: "PVR Logix",
//         address: "Logix, Wave City Center, BW-58, Sector 32, Noida, Uttar Pradesh 201301",
//         movie: [
//             {
//                 name: "Thor",
//                 reviews: [],
//                 dates: [
//                     {
//                         date: "03/03/2019",
//                         timing: [
//                             {
//                                 time: "10:00",
//                                 hall: "AUDI-03",
//                                 seats_available: ["A3", "A4", "A5", "A6", "A7", "A8", "A9",
//                                     "B1", "B5", "B6", "B7", "B8", "B9",
//                                     "C1", "C2", "F7", "F8", "F9",
//                                     "G1", "G5", "G6", "G7", "G8", "G9",
//                                     "H1", "H2", "H7", "H8", "H9",
//                                     "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9",
//                                     "J1", "J2", "J3", "J4"],
//                                 total_seats: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9",
//                                     "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9",
//                                     "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9",
//                                     "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9",
//                                     "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9",
//                                     "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9",
//                                     "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9",
//                                     "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9",
//                                     "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9",
//                                     "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9"]
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]


/*
SEAT

"A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9",
"B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9",
"C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9",
"D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9",
"E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9",
"F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9",
"G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9",
"H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9",
"I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9",
"J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9"

*/