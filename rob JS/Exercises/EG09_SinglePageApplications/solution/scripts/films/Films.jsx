import React from 'react';
import { Route } from 'react-router-dom';
import FilmLinks from './FilmLinks';
import FilmDescription from './FilmDescription';

export default class Films extends React.Component {
  render() {
    return (
      <div>
        <h2>A long time ago in a galaxy far, far way...</h2>
        <FilmLinks match={this.props.match}/>
        <div>
          <Route path={`${this.props.match.url}/:filmName`} component={FilmDescription} />
          <Route exact path={`${this.props.match.url}`} render = {() => (
            <h6>Please select a film to see its details</h6>
            )}
          />
        </div>
      </div>
    );
  }
}
