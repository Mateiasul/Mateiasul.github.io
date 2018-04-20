import React from 'react';

import Player from './Squad/Player/Player';
import Result from './Results/Result';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latestResult: {}
    }
  }

  componentWillMount() {
    let results = [];
    let latestResult = {};
    fetch(`http://localhost:3000/results`)
      .then(response => response.json())
      .then(results => {
        this.setState({latestResult: results[results.length-1]});
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the React United Website!</h1>
        <h2>Latest Result</h2>
        {(this.state.latestResult !== undefined) ? <Result result={this.state.latestResult} /> : false}
        <h2>Random Player</h2>
        <Player />
      </div>
    )
  }
}
