import { combineReducers } from 'redux';
import { FETCH_MOVIE } from '../actions/index';

export function moviesReducer(state = {}, action) {
  console.log('action:', action.payload);
  switch (action.type) {
  case FETCH_MOVIE:
    return action.payload;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  movie: moviesReducer,
});

export default rootReducer;
