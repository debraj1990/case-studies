import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import settingsReducer from './settings/settingsReducer';

const reducer = combineReducers({
	settings: settingsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
