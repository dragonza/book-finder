/* eslint-disable */
import { fromJS } from "immutable";

export default fromJS({
  search: {
    searchTerm: ''
  },
  books: {
    isFetching: false,
    error: false,
    dataMap: {}
  }
});
