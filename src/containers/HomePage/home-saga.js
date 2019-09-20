import { takeLatest, put, delay } from 'redux-saga/effects';
import { INPUT_CHANGE } from "./home-constants";
import { updateSearchTerm } from "./home-action";


function* handleInputChange(action) {
  try {
    yield delay(300);
    yield put(updateSearchTerm(action.term));
  } catch (e) {
    console.log("e", e);
  }
}

export default function* searchSaga() {
  yield takeLatest(INPUT_CHANGE, handleInputChange);
}
