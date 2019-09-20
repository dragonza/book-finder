import { createSelector } from "reselect";

const booksMapSelector = state => state.getIn(["books", "dataMap"]);
const booksFetchingSelector = state => state.getIn(['books', 'isFetching']);
const booksErrorSelector = state => state.getIn(['books', 'error']);


export const makeBooksMapSelector = () =>
  createSelector(
    booksMapSelector,
    books => books
  );

export const makeBooksFetchingSelector = () => createSelector(
  booksFetchingSelector,
  isFetching => isFetching
);

export const makeBooksErrorSelector = () => createSelector(
  booksErrorSelector,
  error => error
)
