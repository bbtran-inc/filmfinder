import { combineReducers } from 'redux';
import { FETCH_MOVIE, UPDATE_SEARCH_TERM } from '../actions/index';

export function moviesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE:
    return action.payload || state;
    default:
    return state;
  }
}

export function searchTermReducer(state = '', action) {
  console.log('searchTerm', action.payload);
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
    return action.payload;
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
  movie: moviesReducer,
});

export default rootReducer;
