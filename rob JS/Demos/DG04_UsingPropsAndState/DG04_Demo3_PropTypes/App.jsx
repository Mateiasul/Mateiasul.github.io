import React from 'react';
{/* propTypes has been recently deprecated as part of React package */}
{/* Need to npm install --save prop-types and then import to use them */}
{/* Note: the React. is no longer needed, see https://github.com/facebook/prop-types#prop-types for more */}
import PropTypes from 'prop-types';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <p>{this.props.contentProp}</p>
        {/* Add this is to use the numberProp */}
        <p>Value of numberProp is: {this.props.numberProp}</p>
      </div>
    );
  }
}

{/* App.propTypes sets up the type of allowable data for properties */}
{/* It uses PropTypes and can set isRequired will display a warning if not provided */}

App.propTypes = {
  headerProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string.isRequired,
  numberProp: PropTypes.number
}



App.defaultProps = {
  headerProp: 'Header from defaultProps',
  contentProp: 'Content from defaultProps'
}
