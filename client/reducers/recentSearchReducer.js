import { STORE_RECENT } from '../actions/index';

export function recentSearchReducer(state = [], action) {
  switch (action.type) {
    case STORE_RECENT:
    return dedupFaves(state, action);
    default:
    return state;
  }
}

function dedupFaves(prevState, action) {
  const newState = [...prevState];
  if (!prevState.includes(action.payload)) {
    newState.push(action.payload);
  }
  return newState;
}
