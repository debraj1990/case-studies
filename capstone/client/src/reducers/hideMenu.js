import { HIDE_MAIN_MENU, SHOW_MAIN_MENU } from '../constants';

export function hideMenuReducer(state = true, { type }) {
    switch (type) {
        case SHOW_MAIN_MENU:
            return false;
        case HIDE_MAIN_MENU:
            return true;
        default:
            return state;
    }
}