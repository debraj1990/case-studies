import { FETCH_TWITTER_FEED, FETCHED_TWITTER_FEED } from '../constants';

export function twitterFlagReducer(state = false, { type }) {
    switch (type) {
        case FETCH_TWITTER_FEED:
            return false;
        case FETCHED_TWITTER_FEED:
            return true;
        default:
            return state;
    }
}

export function twitterFeedReducer(state = {}, { type, feeds }) {
    switch (type) {
        case FETCHED_TWITTER_FEED:
            if (typeof feeds === 'string') {
                return { error: feeds }
            }
            return { ...feeds };
        default:
            return state;
    }
}