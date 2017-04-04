// Loads the state from the localStorage API using getItem
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    // if the serialized State is null we want to return undefined
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    throw err;
  }
};

// Here we save the state to the localStorage and we can access this later through the subscribe method
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    throw err;
  }
};
