import { combineReducers } from 'redux';

import * as currentTime from './currentTime';
import * as currentUser from './currentUser';

export const initialState = {
  time: currentTime.initialState,
  user: currentUser.initialState,
};

export const rootReducer = combineReducers({
  time: currentTime.reducer,
  user: currentUser.reducer,
});
