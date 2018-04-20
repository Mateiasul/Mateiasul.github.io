import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores/ReactUnitedStore';
import { loadSquad } from './actions/playerActions';
import { loadResults } from './actions/resultActions';

// BrowserRouter - a <Router> that uses the HTML5 history API to keep UI in sync with URL

import App from './App/App';

store.dispatch(loadSquad());
store.dispatch(loadResults());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#app")
);
