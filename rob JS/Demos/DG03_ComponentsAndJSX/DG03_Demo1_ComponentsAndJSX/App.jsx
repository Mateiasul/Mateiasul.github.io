{/* Import React so that the React Component can be used */}
import React from 'react';

{/* Create a class to represent the component */}
{/* It must extend the React Component and must be exported */}
export default class App extends React.Component {

  render() {
    {/* The render function must exist for every Component */}
    {/* It must only have one outer HTML element */}
    return (
      <div>
        <h1>Hello World from a JSX React Component</h1>
        <p>Other elements can be added as in normal HTML</p>
      </div>
    );
    {/*  This component has an outer element of div, there are
      other elements inside it */}
  }
}
