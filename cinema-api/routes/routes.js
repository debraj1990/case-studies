var {
    movieCreate,
    movieEdit,
    movieDelete,
    movieFilter
} = require('../controllers/movieController');
var {
    theatreCreate,
    hallCreate,
    theatreEdit,
    theatreDelete,
    hallDelete,
    theatreFilter,
    hallFilter
} = require('../controllers/theatreController');
var {
    eventCreate,
    eventEdit,
    eventDelete,
    eventFilter
} = require('../controllers/eventController');
var {
    cinemaFilter
} = require('../controllers/cinemaController');

module.exports = function(app) {

    /* theatre REST API */
    app.post('/theatre/create', theatreCreate);
    app.patch('/theatre/edit/:id', theatreEdit);
    app.delete('/theatre/delete/:id', theatreDelete);
    app.get('/theatre/filter', theatreFilter);
    app.post('/theatre/audi/create', hallCreate);
    app.delete('/theatre/audi/delete/:id', hallDelete);
    app.get('/theatre/audi/filter/:id', hallFilter);

    /* movie REST API */
    app.post('/movie/create', movieCreate);
    app.get('/movie/edit', movieEdit);
    app.delete('/movie/delete/:id', movieDelete);
    app.get('/movie/filter', movieFilter);

    /* theatre REST API */
    app.post('/event/create', eventCreate);
    app.get('/event/edit', eventEdit);
    app.delete('/event/delete/:id', eventDelete);
    app.get('/event/filter', eventFilter);
    
    /* global REST API */
    app.get('/cinema/filter', cinemaFilter);

};