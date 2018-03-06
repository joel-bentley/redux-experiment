import * as types from '../actions/types';

export const initialState = { currentUser: {}, loggedIn: false };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, currentUser: action.payload, loggedIn: true };
    case types.LOGOUT:
      return { ...state, currentUser: {}, loggedIn: false };
    default:
      return state;
  }
};
