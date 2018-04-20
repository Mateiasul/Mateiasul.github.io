import React from 'react';
import { connect } from 'react-redux';

import Result from './Result';

class Results extends React.Component {

  render() {
    return (
      <div>
        <h1>React United Results</h1>
        {this.props.results.map(result => (
          <Result key={[result.home, result.away]} result={result} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps)(Results);
