import { GET_BOOKS_LOADING, GET_BOOKS_REQUEST } from "./books-constant";
import { UPDATE_DATA } from "../../store/data-action";

export const getBooks = (searchTerm) => {
  return {
    type: GET_BOOKS_REQUEST,
    dataActionType: 'UPDATE_DATA',
    searchTerm,
  };
};

export const getBooksLoading = (loading = false) => {
  return UPDATE_DATA({
    _path: 'books.isFetching',
    _value: loading,
    _type: GET_BOOKS_LOADING,
  });
};
