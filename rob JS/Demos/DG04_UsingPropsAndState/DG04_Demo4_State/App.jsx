import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      stateText : 'This is state text',
      stateNumber: 10
    }
  }

  update(e) {
    {/* setState is used to update the state property of this component */}
    this.setState (
      {
        stateText: 'stateText has been updated, as has stateNumber',
        stateNumber: 20
      }
    )
  }

  render() {
    return (
      <div>
        {/* Add in part 2 to demonstrate updating state via event */}
        <button onClick={this.update.bind(this)}>Click to update state</button>
        <p>{this.state.stateText}</p>
        <p>Value of stateNumber is: {this.state.stateNumber}</p>
      </div>
    );
  }
}
