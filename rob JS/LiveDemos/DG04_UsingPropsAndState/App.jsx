import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {

  // Add a constructor for state
  constructor(props) {
    super(props);

    this.state = {
      stateText: ' This is initial state text',
      stateNumber: 100,
      headerText: 'This is header text set in state',
      contentText: 'This is content text set in state'
    }
  }

  update(event) {
    {/* The setState method is used to update state */}
    {/* The calling of setState triggers a call to render */}
    this.setState(
      {
        stateText: 'stateText has been updated, as has stateNumber',
        stateNumber: 200,
        headerText: 'This is header text updated in state'//,
       // contentText: 'This is content text updated in state'
      }
    );
  }

  render() {

    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        {/* {} notation is used to insert javascript expressions */}
        {/* this.props identifies the component and the prop name attribute value to insert */}
        <p>{this.props.contentProp}</p>
        <p>Value of numberProp is: {this.props.numberProp}</p>
        <hr />
        <h1>State</h1>
        <p>State text is: {this.state.stateText}</p>
        <p>State number is: {this.state.stateNumber}</p>
        <br />
        <button onClick={this.update.bind(this)}>Click to update state</button>
        <hr />
        <h1>Passing state through props</h1>
        <Header headerProp={this.state.headerText} />
        <Content contentProp={this.state.contentText} />
      </div>
    );
  }
}

// Create components that are soley used in the App component in the same file
class Header extends React.Component {
  render() {
    return(
      <h1>{this.props.headerProp}</h1>
    );
  }
}

const Content = (props) => (
  <p>{props.contentProp}</p>
);

// Use Proptypes to ensure the presence and type of properties
App.propTypes = {
  headerProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string.isRequired,
  numberProp: PropTypes.number.isRequired
}

// Default props can be used
App.defaultProps = {
  headerProp: 'Header from defaultProps',
  contentProp: 'Content from defaultProps'
}
