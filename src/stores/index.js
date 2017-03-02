const redux = require('redux');
const reducers = require('../reducers');

const store = redux.createStore(reducers);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers')
    store.replaceReducer(nextReducer)
  })
}

export default store;

