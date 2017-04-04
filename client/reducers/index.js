import { combineReducers } from 'redux';
import { searchTermReducer } from './searchReducer';
import { moviesReducer } from './movieReducer';
import { favoritesReducer } from './favoriteReducer';


const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
  favoritesList: favoritesReducer,
  movie: moviesReducer,
});

export default rootReducer;
