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
    console.log('function*handleGetUser -> data', data);
    yield put(Action.signUpCompanyS(data));
  } catch (e) {
    console.log('function*handleGetUser -> e', e);
    Alert.alert(TEXT.titleError, TEXT.tryAgainLater);
    yield put(Action.signUpCompanyE(e));
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.SIGN_UP_R, handleCreate);
}

export default function* companySaga() {
  yield all([fork(watchFetchRequest)]);
}
