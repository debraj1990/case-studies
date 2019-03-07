import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import settingsReducer from './settings/settingsReducer';
import { moviesListReducer } from './movies/movieReducer';

const reducer = combineReducers({
	settings: settingsReducer,
	movies: moviesListReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
