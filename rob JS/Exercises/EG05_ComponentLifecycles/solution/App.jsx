import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultState: 'Default state time!',
      count: 0
    }

    console.log(this.props.defaultProp);
    console.log("Initial Count: " + this.state.count);
  }

  increase() {
    this.setState({count: this.state.count + 1});
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate: Component is about to update!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component just updated!");
  }

  componentWillMount() {
    console.log("componentWillMount: Component is about to mount!");
  }

  componentDidMount() {
    console.log("componentDidMount: Component just mounted!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be removed");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should component update?");

    if(nextState.count < 5) {
      console.log("Condition met: Component should update!");
      return true;
    }
    else {
      console.log("Condition not met: Component should NOT update and will be removed");
      ReactDOM.unmountComponentAtNode(content);
      return false;
    }

  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps: Component will get new props!")
  }
  render() {

      let backgroundStyle = {
        padding: 50,
        border: "#333 2px dotted",
        width: 250,
        height: 100,
        borderRadius: 10,
        textAlign: "center"
      };

      let numberStyle = {
        fontSize: 24
      }

      return(
        <div style={backgroundStyle}>
          <p style={numberStyle}>{this.state.count}</p>
          <button onClick={this.increase.bind(this)}>Increase</button>
          <p>Please inspect the console</p>
        </div>
      );
  }
}
