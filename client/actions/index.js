import axios from 'axios';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const SET_FAVORITE = 'SET_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const STORE_RECENT = 'STORE_RECENT';

export function updateSearchTerm(searchTerm) {
  return { type: UPDATE_SEARCH_TERM, payload: searchTerm };
}

export function searchByTitle(title) {
  const newTitle = title.replace(/[\d\W\s]/g, '+');
  console.log('title:', newTitle);
  const url = `http://www.omdbapi.com/?t=${newTitle}&plot=full`;
  const request = axios.get(url);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_MOVIE, payload: data });
    });
  };
}

export function setFavorite(title, imdbID, poster, rated) {
  const moviedata = {};
  moviedata[title] = { title, imdbID, poster, rated };
  console.log('TITLE:', title);
  return { type: SET_FAVORITE, payload: moviedata };
}

export function removeFavorite(title) {
  return { type: REMOVE_FAVORITE, payload: title };
}

export function setRecentSearch(string) {
  return { type: STORE_RECENT, payload: string };
}
