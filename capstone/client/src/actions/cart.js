import { ADD_TO_CART, LOAD_CART } from '../constants'

import Api from '../Api'

function fetchFromStorage(key) {
  let item = localStorage.getItem(key);
  if (item) {
    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }
}

function storeInStorage(key, val) {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(val));
}

export function addToCart(item, qty) {
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Adding to cart..' });
    item.qty = qty;
    let itemsInCart = fetchFromStorage('cartItems') || [];
    if (itemsInCart.length) {
      let itemArr = [];
      let existingItem = itemsInCart.filter((val) => val.productId === item.productId);
      if (existingItem.length) {
        itemsInCart.map((val, idx) => {
          if (val.productId === item.productId) {
            val.qty = val.qty + qty;
          }
          itemArr.push(val);
        })
        itemsInCart = [...itemArr];
      } else {
        itemsInCart.push(item);
      }
    } else {
      itemsInCart.push(item);
    }
    storeInStorage('cartItems', itemsInCart);
    let timer = setTimeout(() => {
      dispatch({ type: 'REQUEST_FINISH', message: 'Request finished...' })
      clearTimeout(timer);
    }, 1000);
    return { type: 'ADD_TO_CART', cart: itemsInCart }

  }
}

export function loadCart(user) {
  let itemsInCart = fetchFromStorage('cartItems') || [];
  return { type: 'LOAD_CART', cart: itemsInCart }
}

export function loadCartLength() {
  let itemsInCart = fetchFromStorage('cartItems') || [];
  return { type: 'LOAD_CART_LENGTH', cart: itemsInCart }
}
