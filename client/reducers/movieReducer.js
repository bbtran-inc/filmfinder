import { FETCH_MOVIE } from '../actions/index';
export function moviesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE:
    return action.payload || state;
    default:
    return state;
  }
}
