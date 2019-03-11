import { combineReducers } from 'redux'
import { loaderReducer } from './loader';
import { categoriesReducer } from './categories'
import { productReducer, productDetailReducer } from './product'

const rootReducer = combineReducers({
  loader: loaderReducer,
  categories: categoriesReducer,
  products: productReducer,
  productObj: productDetailReducer
});


export default rootReducer;