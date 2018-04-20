import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      headerText: 'Header set in state',
      contentText: 'Content set in state'
    }
  }

  update(e) {
    this.setState ({
      headerText: 'Header text updated in state',
      contentText: 'Content text updated in state'
    });
  }

  render() {
    return (
      <div>
        <Header headerProp={this.state.headerText} />     {/* Will use Header component defined below */}
        <Content contentProp={this.state.contentText} />  {/* Will use Content component defined below */}
        <button onClick={this.update.bind(this)}>Click to update state</button>
      </div>
    );
  }
}

{/* Create 2 components inside this class for exclusive use here!
class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.headerProp}</h1>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <p>{this.props.contentProp}</p>
    );
  }
}*/}

{/* Declare these as functional components rather than classes */}
function Header(props) {
  return (
    <h1>{props.headerProp}</h1>
  );
}

{/* Alternatively... */}
const Content = (props) => (
    <p>{props.contentProp}</p>
);
