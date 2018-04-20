import React from 'react';
import ReactDOM from 'react-dom';

// Import the App component from the App.jsx file
import App from './App';

ReactDOM.render(
  // Use the class name as a component - it's HTML will be rendered
  <App title="People datasets"/>,
  document.querySelector('#app')
);
