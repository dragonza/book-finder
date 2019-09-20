import { GET_BOOKS_FAILURE, GET_BOOKS_LOADING, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./books-constant";
import { UPDATE_DATA } from "../../store/data-action";
import { fromJS } from "immutable";

const path = 'books';
export const getBooks = (searchTerm) => {
  console.log('searchTerm actions', searchTerm);
  return {
    type: GET_BOOKS_REQUEST,
    dataActionType: 'UPDATE_DATA',
    searchTerm,
  };
};

export const getBooksLoading = (loading = false) => {
  return UPDATE_DATA({
    _path: `${path}.isFetching`,
    _value: loading,
    _type: GET_BOOKS_LOADING,
  });
};

export const getBooksSuccess = (payload = {}) => {
  return UPDATE_DATA({
    _path: path,
    _value: fromJS(payload),
    _type: GET_BOOKS_SUCCESS,
  });
};

export const getBooksFailed = (payload = {}) => {
  return UPDATE_DATA({
    _path: path,
    _value: fromJS(payload),
    _type: GET_BOOKS_FAILURE
  });
};
