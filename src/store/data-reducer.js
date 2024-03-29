import { fromJS } from 'immutable';
import * as immutable from '../utils/immutable';
import { dataActionConst } from './data-action';
import initialState from './default-state';

export default function dataReducer(state = fromJS(initialState), action) {
  let { type } = action;
  const dataActionConstList = Object.keys(dataActionConst);

  // eslint-disable-next-line
  for (let dataType of dataActionConstList) {
    const i = type.includes(dataType);
    if (i) {
      type = dataType.replace('_DATA', '').toLowerCase();
      return immutable[type](
        state,
        action.meta._path,
        action.payload,
      );
    }
  }
  return state;
}
