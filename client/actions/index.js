import axios from 'axios';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

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
