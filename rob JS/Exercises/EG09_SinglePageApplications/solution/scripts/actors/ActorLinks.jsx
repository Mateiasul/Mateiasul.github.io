import React from 'react';
import { Link } from 'react-router-dom';

import ActorDetails from './ActorDetails';

export default class ActorLinks extends React.Component {

  render() {
    return (
        <nav>
          <ul className="vertical medium-horizontal menu items">
            <li><Link to={`${this.props.match.url}/HarrisonFord`} className="active">Han Solo</Link></li>
            <li><Link to={`${this.props.match.url}/MarkHamill`} className="active">Luke Skywalker</Link></li>
            <li><Link to={`${this.props.match.url}/CarrieFisher`} className="active">Princess Leia</Link></li>
          </ul>
        </nav>
    );
  }
}
