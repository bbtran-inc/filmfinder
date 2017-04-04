import { SET_FAVORITE, REMOVE_FAVORITE } from '../actions/index';

export function favoritesReducer(state = {}, action) {
  switch (action.type) {
    case SET_FAVORITE:
    console.log('favs:', action.payload);
    return addFavoriteToList(state, action);
    case REMOVE_FAVORITE:
    return removeFavoriteFromList(state, action);
    default:
    return state;
  }
}

function addFavoriteToList(prevState, action) {
  const newState = Object.assign({}, prevState, action.payload);
  console.log('newState:', newState);
  return newState;
}

function removeFavoriteFromList(prevState, action) {
  const copiedState = Object.assign({}, prevState);
  delete copiedState[action.payload];
  return copiedState;
}
