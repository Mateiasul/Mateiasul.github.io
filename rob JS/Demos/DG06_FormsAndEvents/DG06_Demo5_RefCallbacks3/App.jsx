import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  // componentDidMount() {
  //   this.textInput.focus();
  // }

  render() {
    return (<CustomComponent/>);
  }
}

function CustomComponent(props) {
  // textInput must be declared here so the ref callback can
  // refer to it
  let textInput = null;

  function handleClick() {
    textInput.focus();
  }

  return (
    <div>
      <input type="text" ref= {(input) => {textInput = input;}} defaultValue="Default value"/>
      <input type="button" value="Focus Input" onClick={handleClick}/>
    </div>
  );
}
