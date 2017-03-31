import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Or wherever you keep your reducers

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers/index');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
