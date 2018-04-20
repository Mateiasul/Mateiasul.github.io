import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";

ReactDOM.render(
  <App defaultProp="Default Property from main.js"/>,
  document.querySelector("#content")
);
