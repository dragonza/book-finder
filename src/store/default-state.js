/* eslint-disable */
import { fromJS } from "immutable";
export default fromJS({
  auth: {
    authenticated: localStorage.getItem('token') || '', // store token here
    errorMessage: '',
    loading: false,
  },
  search: {
    searchTerm: ''
  },
  books: {

  }
});
