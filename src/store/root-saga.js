import { spawn } from 'redux-saga/effects';
import authSaga from '../containers/Auth/auth-saga';
import searchSaga from '../containers/HomePage/home-saga'

export default function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(searchSaga);
}
