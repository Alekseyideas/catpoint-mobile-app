import {Alert} from 'react-native';
import {all, fork, put, call, takeEvery} from 'redux-saga/effects';
import {callApi} from '../../utils/callApi';
import {TEXT} from '../../utils/text';
import * as Action from './actions';
import {ActionTypes} from './types';

function* handleCreate(action: ReturnType<typeof Action.signUpCompanyR>) {
  try {
    const data = yield call(callApi, {
      method: 'POST',
      route: '/company/sign-up',
      data: action.payload,
    });
    yield put(Action.signUpCompanyS(data));
  } catch (e) {
    console.log('function*handleGetUser -> e', e);
    Alert.alert(TEXT.titleError, TEXT.tryAgainLater);
    yield put(Action.signUpCompanyE(e));
  }
}
function* handleGet(action: ReturnType<typeof Action.getCompanyR>) {
  try {
    const data = yield call(callApi, {
      method: 'GET',
      route: '/company',
    });
    yield put(Action.getCompanyS(data));
    if (action.payload.callbackSuccess)
      yield call(action.payload.callbackSuccess);
  } catch (e) {
    console.log('function*handleGetUser -> e', e);
    if (action.payload.callbackError) yield call(action.payload.callbackError);
    Alert.alert(TEXT.titleError, TEXT.tryAgainLater);
    yield put(Action.getCompanyE(e));
  }
}
function* handleSignIn(action: ReturnType<typeof Action.signInCompanyR>) {
  try {
    const data = yield call(callApi, {
      method: 'POST',
      route: '/company/sign-in',
      data: action.payload,
    });
    yield put(Action.signInCompanyS(data));
  } catch (e) {
    console.log('function*handleGetUser -> e', e);

    Alert.alert(TEXT.titleError, JSON.stringify(e));
    yield put(Action.signInCompanyE(e));
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.SIGN_UP_R, handleCreate);
  yield takeEvery(ActionTypes.COMPANY_R, handleGet);
  yield takeEvery(ActionTypes.SIGN_IN_R, handleSignIn);
}

export default function* companySaga() {
  yield all([fork(watchFetchRequest)]);
}
