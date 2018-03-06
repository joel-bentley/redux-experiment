const host = 'https://andthetimeis.com';

export const types = { FETCH_NEW_TIME: 'TIME/FETCH_NEW_TIME' };

export const initialState = { currentTime: new Date().toString() };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEW_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};

export const actions = {
  fetchNewTimeLocal: () => ({
    type: types.FETCH_NEW_TIME,
    payload: new Date().toString(),
  }),
  fetchNewTimeAPI: (timezone = 'est', str = 'now') => ({
    type: types.FETCH_NEW_TIME,
    meta: {
      type: 'api',
      url: host + '/' + timezone + '/' + str + '.json',
    },
  }),
};
