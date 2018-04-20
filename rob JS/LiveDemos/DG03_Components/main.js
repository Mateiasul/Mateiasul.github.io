// Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Import the App component from App.jsx
import App from './App';

// Use ReactDOM's render method to specify some HTML to display
// and an element to target to display it in on index.html
ReactDOM.render(
    // Replace the HTML will the App component
    //<h1>Hello, World from React and Ed and QA!</h1>,
    <App />,
    document.querySelector('#app')
);