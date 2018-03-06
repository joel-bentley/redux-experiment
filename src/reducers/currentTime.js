import * as types from '../actions/types';

export const initialState = { currentTime: new Date().toString() };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEW_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};
