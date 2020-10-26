import {fork} from 'redux-saga/effects';
import companySaga from './Company/sagas';
import userSaga from './User/sagas';

export default function* () {
  yield fork(userSaga);
  yield fork(companySaga);
}
