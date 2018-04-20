// Make imports so that the react and react-dom libraries can be used
import React from 'react';
import ReactDOM from 'react-dom';

// Use ReactDOM's render method to specify some HTML to display
// and also a target div to display it in
ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.querySelector('#app')
);
