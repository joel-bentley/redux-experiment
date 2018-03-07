import { call, put } from 'redux-saga/effects';
import * as api from '../api';

import { actions as currentTimeActions } from '../reducers/currentTime';

export function* fetchNewTime() {
  try {
    const dateString = yield call(api.fetchNewTime);
    yield put(currentTimeActions.setNewTime(dateString));
  } catch (err) {
    console.err(err.message);
  }
}
