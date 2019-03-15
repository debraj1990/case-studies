
import { LOAD_EVENT, CREATE_EVENT } from '../constants'
import Api from '../Api'

export function loadEvents(userId) {
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Events..' })
    Api.loadEvents(userId)
      .then(response => response.data)
      .then(events => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_EVENT, events }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading categories' })
      })
  }

}