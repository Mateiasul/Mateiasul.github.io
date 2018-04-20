import React from 'react';

import Result from './Result';

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3000/results`)
      .then(response => response.json())
      .then(results => this.setState({results}))
  }

  render() {
    return (
      <div>
        <h1>React United Results</h1>
        <ul>
          {this.state.results !== undefined ? this.state.results.map((result, index) => (
            <Result key={index} result={result} />
          )) : false}
        </ul>
      </div>
    );
  }
}
