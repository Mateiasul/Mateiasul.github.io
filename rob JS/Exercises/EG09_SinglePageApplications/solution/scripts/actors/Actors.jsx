import React from 'react';
import { Route, Link } from 'react-router-dom';

import ActorLinks from './ActorLinks';
import ActorDetails from './ActorDetails';

export default class Actors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>"When 900 years old, you reach...look as good, you'll not..."</h3>
        <ActorLinks match={this.props.match}/>
        <div>
          <Route path={`${this.props.match.url}/:actorName`} component={ActorDetails} />
          <Route exact path={`${this.props.match.url}`} render = {() => (
            <h6>Please select a actor to see their details</h6>
            )}
          />
        </div>
      </div>
    );
  }
}
