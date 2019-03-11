import { combineReducers } from 'redux'
import { loaderReducer } from './loader';
import { categoriesReducer } from './categories'
import { productReducer } from './product'
import { cartReducer } from './cart'
import { wishlistReducer } from './wishlist'
import { userReducer } from './user'

const rootReducer = combineReducers({
  loader: loaderReducer,
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  user: userReducer
});


export default rootReducer;