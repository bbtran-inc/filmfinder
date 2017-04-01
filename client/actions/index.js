import axios from 'axios';

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function searchByTitle(title) {
  const url = `http://www.omdbapi.com/?t=${title}`;
  console.log(url);
  const request = axios.get(url);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_MOVIE, payload: data });
    });
  };
}
