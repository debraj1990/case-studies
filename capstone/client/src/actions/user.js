
import { GET_USER } from '../constants'
import Api from '../Api'

export function getUser(userId) {
    // console.log("Get user called");
    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Cart..' })
        Api.getUser(userId)
            .then(response => response.data)
            .then(user => {
                // log
                dispatch({ type: 'REQUEST_FINISH', message: '' })
                dispatch({ type: GET_USER, user }) // async action
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading cart' })
            })
    }

}

