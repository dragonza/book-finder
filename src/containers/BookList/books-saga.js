import { takeLatest, put, call } from 'react-redux/effects'
import { GET_BOOKS_REQUEST } from "./books-constant";
import { getBooksLoading } from "./books-actions";
import axios from 'axios'
import { API_KEY } from '../../config/key'

const url = 'https://www.googleapis.com/books/v1/volumes?q=';

function* handleGetBooks(action) {
  try {
    const { searchTerm, dataActionType } = action;
    yield put(getBooksLoading(true));
    const { data } = yield call(axios, {
      url: `${url}${searchTerm}&key=${API_KEY}`,
    });
  } catch (e) {

  }
}

export default function* bookSaga() {
  yield takeLatest(GET_BOOKS_REQUEST, handleGetBooks);
}
