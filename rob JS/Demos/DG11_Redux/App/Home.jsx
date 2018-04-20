import React from 'react';
import { connect } from 'react-redux';

import Player from './Squad/Player/Player';
import Result from './Results/Result';

class Home extends React.Component {

  render() {
    let randomPlayerNumber = Math.floor(Math.random() * this.props.squad.length) + 1;

    return (
      <div>
        <h1>Welcome to the React United Website!</h1>
        <h2>Latest Result</h2>
        {this.props.results.map((result, index) => (
          (index === this.props.results.length - 1) ?
            <Result result={result} key={index}/> : false
        ))}
        <h2>Random Player</h2>
        <Player player={this.props.squad[randomPlayerNumber]}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    squad: state.squad,
    results: state.results
  }
}

export default connect(mapStateToProps)(Home);


