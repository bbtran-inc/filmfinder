import { combineReducers } from 'redux';
import { searchTermReducer } from './searchReducer';
import { moviesReducer } from './movieReducer';
import { favoritesReducer } from './favoriteReducer';
import { recentSearchReducer } from './recentSearchReducer';

const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
  favoritesList: favoritesReducer,
  movie: moviesReducer,
  recentSearches: recentSearchReducer,
});

export default rootReducer;
