import React from 'react';

// import the Children
import MyFirstChildComponent from './ChildComponents/MyFirstChildComponent';
import MySecondChildComponent from './ChildComponents/MySecondChildComponent';

export default class App extends React.Component {

  render() {

    return (
      <div>
        <MyFirstChildComponent />
        <hr />
        <MySecondChildComponent />
        <hr />
        <p>I am the parent!</p>
      </div>
    );
  }
}
