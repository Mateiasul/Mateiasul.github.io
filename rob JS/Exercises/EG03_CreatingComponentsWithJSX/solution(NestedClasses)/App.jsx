import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
        <h1>Heading from Header Class</h1>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>The first paragraph in Content</p>
        <p>The second paragraph in Content</p>
      </div>
    );
  }
}
