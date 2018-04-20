import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* Notes:
    Route - Most important to understand and learn to use well - most basic
            responsibility is to render some UI when a location matches the route's path
    Switch - Switch renders the first child (Route or Redirect) that matches the location
    Link - Provides declarative, accessible navigation around application
*/

import Home from './Home';
import Squad from './Squad/Squad';
import Results from './Results/Results';

// Main component renders one of the three provided routes (provided there is a match)
// Both /squad and /results will match ANY pathname that starts with /squad or /results
// The / route will only match when the pathname is exactly the string "/"
const MainComponent = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/squad" component={Squad} />
      <Route path="/results" component={Results} />
    </Switch>
  </main>
);

export default MainComponent;
