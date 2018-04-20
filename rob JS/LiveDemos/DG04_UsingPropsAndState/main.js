import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App 
    headerProp="Well, hello there, what have we here!"
    numberProp={2*5}
  />,
  document.querySelector('#app')
);
