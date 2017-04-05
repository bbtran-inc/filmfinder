import { FETCH_MOVIE, CLEAR_MOVIE } from '../actions/index';
export function moviesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE:
    return action.payload || state;
    case CLEAR_MOVIE:
    return state;
    default:
    return state;
  }
}
