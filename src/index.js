import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';
import Main from './containers/Main';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
