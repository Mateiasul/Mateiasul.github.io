import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

//import * as playerActions from '../../actions/playerActions'

import PlayerLinks from './Player/PlayerLink';

// SquadList iterates over all the players and creates a link
// to their profile page
class SquadList extends React.Component {

  render() {
    return (
      <div>
          <PlayerLinks squad={this.props.squad} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    squad: state.squad
  }
}

export default connect(mapStateToProps)(SquadList);
