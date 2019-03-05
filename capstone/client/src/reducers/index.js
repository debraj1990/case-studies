import { combineReducers } from 'redux'
import { loaderReducer } from './loader';
import { promotionReducer } from './promotion'
import { socialfeedsReducer } from './socialfeeds';
import { collapseMenuReducer } from './collapseMenu';
import { hideMenuReducer } from './hideMenu';
import { twitterFlagReducer, twitterFeedReducer } from './twitterReducer';


const rootReducer = combineReducers({
  loader: loaderReducer,
  yt_videos: promotionReducer,
  socialfeeds: socialfeedsReducer,
  isMenuCollapsed: collapseMenuReducer,
  isMenuHidden: hideMenuReducer,
  twitter: twitterFlagReducer,
  twitterFeeds: twitterFeedReducer
});


export default rootReducer;