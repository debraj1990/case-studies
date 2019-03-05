import { combineReducers } from 'redux'
import { loaderReducer } from './loader';
import { categoriesReducer } from './categories'

const rootReducer = combineReducers({
  loader: loaderReducer,
  categories: categoriesReducer
});


export default rootReducer;