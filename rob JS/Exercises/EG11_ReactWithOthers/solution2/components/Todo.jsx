import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}
