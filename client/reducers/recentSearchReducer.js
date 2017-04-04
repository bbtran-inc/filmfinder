import { STORE_RECENT } from '../actions/index';

export function recentSearchReducer(state = [], action) {
  switch (action.type) {
    case STORE_RECENT:
    return [...state, action.payload];
    default:
    return state;
  }
}
