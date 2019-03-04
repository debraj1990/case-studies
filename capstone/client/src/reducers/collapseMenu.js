import { COLLAPSE_MAIN_MENU, EXPAND_MAIN_MENU } from '../constants';

export function collapseMenuReducer(state = true, { type }) {
    switch (type) {
        case EXPAND_MAIN_MENU:
            return false;
        case COLLAPSE_MAIN_MENU:
            return true;
        default:
            return state;
    }
}