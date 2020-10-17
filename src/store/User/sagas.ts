import {all, fork, put, call, takeEvery} from 'redux-saga/effects';
import {callApi} from '../../utils/callApi';
import * as Action from './actions';
import {ActionTypes} from './types';

function* handleGetUser(action: ReturnType<typeof Action.signInR>) {
  try {
    const data = yield call(callApi, {
      method: 'POST',
      route: '/user/sign-up',
      data: action.payload,
    });
    console.log('function*handleGetUser -> data', data);
    yield put(Action.signInS(data));
  } catch (e) {
    console.log('function*handleGetUser -> e', e);
    yield put(Action.signInE(e));
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.SING_IN_R, handleGetUser);
}

export default function* userSaga() {
  yield all([fork(watchFetchRequest)]);
}
