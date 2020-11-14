import {all, fork, put, call, takeEvery} from 'redux-saga/effects';
import {callApi} from '../../utils/callApi';
import * as Action from './actions';
import {ActionTypes} from './types';

function* handleCreateUser(action: ReturnType<typeof Action.signInR>) {
  try {
    const data = yield call(callApi, {
      method: 'POST',
      route: '/user/sign-up',
      data: action.payload,
    });
    // const data = action.payload;
    console.log('function*handleGetUser -> data', data);
    yield put(Action.signInS(data));
  } catch (e) {
    console.log('function*handleGetUser -> e', e);
    yield put(Action.signInE(e));
  }
}

function* handleGetUser(action: ReturnType<typeof Action.getUserR>) {
  try {
    const data = yield call(callApi, {
      method: 'GET',
      route: '/user',
    });
    console.log('function*handleGetUser -> data', data);
    yield put(Action.getUserS(data));
    if (action.payload.callbackSuccess)
      yield call(action.payload.callbackSuccess);
  } catch (e) {
    console.log('function*handleGetUser -> e', e);
    if (action.payload.callbackError) yield call(action.payload.callbackError);
    yield put(Action.getUserE(e));
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.SING_IN_R, handleCreateUser);
  yield takeEvery(ActionTypes.GET_USER_R, handleGetUser);
}

export default function* userSaga() {
  yield all([fork(watchFetchRequest)]);
}
