import { spawn } from "redux-saga/effects";
import searchSaga from "../containers/HomePage/home-saga";
import bookSaga from "../containers/BookList/books-saga";

export default function* rootSaga() {
  yield spawn(searchSaga);
  yield spawn(bookSaga);
}
