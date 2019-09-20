import { takeLatest, put, call } from 'redux-saga/effects'
import { GET_BOOKS_REQUEST } from "./books-constant";
import { getBooksLoading, getBooksSuccess, getBooksFailed } from "./books-actions";
import axios from 'axios'
import { normalizeBooks } from "../../utils/normalizr";

const url = 'https://www.googleapis.com/books/v1/volumes?q=';

function* handleGetBooks(action) {
  try {
    const { searchTerm } = action;
    console.log('searchTerm saga', searchTerm);
    yield put(getBooksLoading(true));
    const { data } = yield call(axios, {
      url: `${url}${searchTerm}`,
    });
    const {
      entities: { books },
    } = normalizeBooks(data.items);
    yield put(getBooksSuccess({ dataMap: books, isFetching: false, error: null }))
  } catch (e) {
    yield put(getBooksFailed({ error: true, isFetching: false, dataMap: {} }))
  }
}

export default function* bookSaga() {
  yield takeLatest(GET_BOOKS_REQUEST, handleGetBooks);
}
