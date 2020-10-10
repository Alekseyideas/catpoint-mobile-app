import {fork} from 'redux-saga/effects';
import userSaga from './User/sagas';

export default function* () {
  yield fork(userSaga);
}
