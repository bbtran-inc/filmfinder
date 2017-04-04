import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Or wherever you keep your reducers

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));
  /* eslint-enable */

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers/index');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
