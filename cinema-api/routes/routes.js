var {
    movieCreate,
    movieEdit,
    movieDelete,
    movieFilter
} = require('../controllers/movieController');
var {
    theatreCreate,
    theatreEdit,
    theatreDelete,
    theatreFilter
} = require('../controllers/theatreController');
var {
    eventCreate,
    eventEdit,
    eventDelete,
    eventFilter
} = require('../controllers/eventController');

module.exports = function(app) {

    /* theatre REST API */
    app.post('/theatre/create', theatreCreate);
    app.patch('/theatre/edit/:id', theatreEdit);
    app.delete('/theatre/delete/:id', theatreDelete);
    app.get('/theatre/filter', theatreFilter);

    /* movie REST API */
    app.post('/movie/create', movieCreate);
    app.get('/movie/edit', movieEdit);
    app.delete('/movie/delete/:id', movieDelete);
    app.get('/movie/filter', movieFilter);

    /* theatre REST API */
    app.get('/event/create', eventCreate);
    app.get('/event/edit', eventEdit);
    app.delete('/event/delete/:id', eventDelete);
    app.get('/event/filter', eventFilter);

};