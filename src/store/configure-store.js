import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from '../reducers';

import apiMiddleware from './apiMiddleware';
import loggingMiddleware from './loggingMiddleware';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(apiMiddleware, loggingMiddleware)
  );

  return store;
};

export default configureStore;
