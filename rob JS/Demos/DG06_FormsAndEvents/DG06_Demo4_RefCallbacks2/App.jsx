import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <CustomTextInput ref={(input) => {this.textInput = input; }} />
    );
  }
}

class CustomTextInput extends React.Component {

    constructor(props) {
        super(props);
    }

    focus() {
        // Explicitly focus the test input using the raw DOM API
        this.textInput.focus();
    }

    render() {
        // Use the 'ref' callback to store a reference to the text // input DOM element in this.textInput
        return (
            <div>
                <input type="text" ref={(input) => {this.textInput = input;}} />
                <input type="button" value="Focus the text input" onClick={this.focus.bind(this)} />
            </div>
        );
    }
}
