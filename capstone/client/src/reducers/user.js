import { UPDATE_USER_CART, GET_USER } from '../constants'
export function userReducer(state = {}, action) {
    //
    switch (action.type) {
        case GET_USER: {
            let { user } = action;
            return Object.assign({}, user);
        }
        case UPDATE_USER_CART: {
            let { cart } = action;

            let updatedCart = JSON.parse(JSON.stringify(cart));
            let newState = Object.assign({}, state);
            newState.carts = updatedCart;

            return newState;
        }
        default:
            return state;
    }
}