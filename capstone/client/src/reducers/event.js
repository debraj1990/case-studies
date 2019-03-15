
import { LOAD_EVENT, CREATE_EVENT, DELETE_EVENT } from '../constants'

export function eventsReducer(state = [], action) {
  //
  switch (action.type) {
    case LOAD_EVENT: {
      let { events } = action
      return [...events]
    }
    case CREATE_EVENT: {
        let { event } = action;
        let { events } = state;
        let allEvents = [...events, event]
        return Object.assign({}, state, { [events]: allEvents })
    }
    case DELETE_EVENT: {
        let { events } = action
        return [...events]
    }
    default:
      return state;
  }
}