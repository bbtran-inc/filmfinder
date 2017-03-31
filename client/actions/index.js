import axios from 'axios';

const FETCH_MOIVE = 'FETCH_MOVIE';

export function searchByTitle(title) {
  const request = axios.get(`http://www.omdbapi.com/?t=${title}`);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_MOIVE, payload: data });
    });
  };
}
