import { combineReducers } from 'redux';

import currentTimeReducer from './currentTime';
import currentUserReducer from './currentUser';

export default combineReducers({
  time: currentTimeReducer,
  user: currentUserReducer,
});
