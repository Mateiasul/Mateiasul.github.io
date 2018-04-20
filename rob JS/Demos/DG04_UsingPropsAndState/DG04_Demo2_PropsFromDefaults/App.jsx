import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/* {} notation is used to insert data from attribute properties */}
        {/* this.props identifies the component and the prop name the attribute value to insert*/}
        <h1>{this.props.headerProp}</h1>
        <p>{this.props.contentProp}</p>
      </div>
    );
  }
}

App.defaultProps = {
  headerProp : 'Header from defaultProps',
  contentProp : 'Content from defaultProps'
}
