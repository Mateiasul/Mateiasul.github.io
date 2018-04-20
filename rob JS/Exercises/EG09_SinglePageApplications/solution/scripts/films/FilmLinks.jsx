import React from 'react';
import { Link } from 'react-router-dom';

import { FilmDescription } from './FilmDescription';

export default class FilmLinks extends React.Component {
  render() {
    return (
      <nav>
        <ul className="vertical medium-horizontal menu items">
          <li><Link to={`${this.props.match.url}/SW4`} className="active">Star Wars IV - A New Hope</Link></li>
          <li><Link to={`${this.props.match.url}/SW5`} className="active">Star Wars V - The Empire Strikes Back</Link></li>
          <li><Link to={`${this.props.match.url}/SW6`} className="active">Star Wars VI - Return of the Jedi</Link></li>
        </ul>
      </nav>
    );
  }
}
