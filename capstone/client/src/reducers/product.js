


import { LOAD_PRODUCTS } from '../constants'

export function productReducer(state = [], action) {
  //
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let { products } = action
      return [...products]
    }
    default:
      return state;
  }
}