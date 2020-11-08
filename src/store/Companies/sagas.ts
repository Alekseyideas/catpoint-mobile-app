import {all, fork, put, call, takeEvery} from 'redux-saga/effects';
import {callApi} from '../../utils/callApi';
import * as Action from './actions';
import {ActionTypes} from './types';

function* handleGetCompanies(action: ReturnType<typeof Action.getCompaniesR>) {
  try {
    const data = yield call(callApi, {
      method: 'GET',
      route: '/user-companies',
    });
    yield put(Action.getCompaniesS({companies: data}));
    if (action.payload.callBack) yield call(action.payload.callBack, true);
  } catch (e) {
    console.log('function*handleGetUser -> e', e);
    if (action.payload.callBack) yield call(action.payload.callBack, false);
    yield put(Action.getCompaniesE(e));
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.GET_COMPANIES_R, handleGetCompanies);
}

export default function* companiesSaga() {
  yield all([fork(watchFetchRequest)]);
}
