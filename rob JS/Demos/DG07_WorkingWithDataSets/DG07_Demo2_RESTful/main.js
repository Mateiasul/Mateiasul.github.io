// Make imports so that the react and react-dom libraries can be used
import React from 'react';
import ReactDOM from 'react-dom';

import App from './restful';

// Use ReactDOM's render method to specify some HTML to display
// and also a target div to display it in
ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
