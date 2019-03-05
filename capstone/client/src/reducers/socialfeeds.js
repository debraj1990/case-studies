
import { LOAD_SOCIAL_FEEDS } from '../constants'

export function socialfeedsReducer(state = [], action) {
  //
  switch (action.type) {
    case LOAD_SOCIAL_FEEDS: {

      let { feeds } = action;
      return [...feeds]
    }

    default:
      return state;
  }
}

