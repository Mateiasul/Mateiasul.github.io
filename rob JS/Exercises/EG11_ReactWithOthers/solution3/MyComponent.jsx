import React from 'react';

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>Rendering faster in AngularJs with {this.props.framework}</div>
    );
  }
}
