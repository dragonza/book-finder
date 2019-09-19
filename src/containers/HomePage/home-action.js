
import { fromJS } from 'immutable';
import { UPDATE_DATA } from '../../store/data-action';
import { INPUT_CHANGE, UPDATE_SEARCH_TERM } from "./home-constants";

const basePath = 'search';

export function inputChange(term) {
  return {
    type: INPUT_CHANGE,
    term,
  };
}


export function updateSearchTerm(term) {
  console.log('term', term);
  return UPDATE_DATA({
    _path: `${basePath}.searchTerm`,
    _value: term,
    _type: UPDATE_SEARCH_TERM,
  });
}
