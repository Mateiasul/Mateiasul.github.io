import React from 'react';

import { Switch, Route } from 'react-router-dom';
/* Notes:
    Route - Most important to understand and learn to use well - most basic
            responsibility is to render some UI when a location matches the route's path
    Switch - Switch renders the first child (Route or Redirect) that matches the location
*/

import SquadList from './SquadList';
import Player from './Player/Player';

// Squad Component matches one of two different routes depending on full pathname
const Squad = () => (
  <Switch>
    <Route exact path="/squad" component={SquadList} />
    <Route path="/squad/:number" component={Player} />
  </Switch>
);

export default Squad;
