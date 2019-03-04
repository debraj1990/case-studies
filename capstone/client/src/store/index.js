
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
// import rootSaga from '../sagas'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension';

const intialState = {
  yt_videos: [],
  loader: false,
  isMenuCollapsed: true,
  isMenuHidden: true,
  twitter: false,
  twitterFeeds: false
}

const sagaMiddleware = createSagaMiddleware()

let middlewares = [thunk, sagaMiddleware];

const store = createStore(rootReducer, intialState, composeWithDevTools(
  applyMiddleware(...middlewares)
))

// sagaMiddleware.run(rootSaga)

export default store;