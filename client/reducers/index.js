import { combineReducers } from 'redux';
import { FETCH_MOVIE } from '../actions/index';



// const updateMovie = (state, action) => {
//   const newDetails = {};
//   Object.assign(newDetails, state, )
// };

function moviesReducer(state = {}, action) {
  switch (action.type) {
  case FETCH_MOVIE:
    console.log('state', action.payload);
    return action.payload || state;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  movie: moviesReducer,
});

export default rootReducer;
