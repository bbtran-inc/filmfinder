import { UPDATE_SEARCH_TERM } from '../actions/index';
export function searchTermReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
    return action.payload;
    default:
    return state;
  }
}
