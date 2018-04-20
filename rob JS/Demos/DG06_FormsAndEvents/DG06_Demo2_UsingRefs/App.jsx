import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    clearInput(e) {
        e.preventDefault();
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    clearInputBetter(e) {
        e.preventDefault();
        this.setState({data: ''});
        this.myFormRef.focus();
    }

    render() {
        return (
          <div>
            {/*<form>
                <p>
                    <input type="text" placeholder="I have no state or value stored"/>
                </p>
                <p>
                    <input type="text" value={this.state.data} onChange={this.updateState.bind(this)} ref="myInput"/>
                </p>
                <p>
                    <input type="text" placeholder="I have no state or stored value"/>
                </p>
                <p>
                    <button onClick={this.clearInput.bind(this)}>CLEAR</button>
                </p>
                <h4>{this.state.data}</h4>
            </form>

            <hr />*/}
            <form>
              <p>
                  <input type="text" placeholder="I have no state or value stored"/>
              </p>
              <p>
                  <input type="text" value={this.state.data} onChange={this.updateState.bind(this)} ref={el =>this.myFormRef = el}/>
              </p>
              <p>
                  <input type="text" placeholder="I have no state or stored value"/>
              </p>
              <p>
                  <button onClick={this.clearInputBetter.bind(this)}>CLEAR</button>
              </p>
              <h4>{this.state.data}</h4>
            </form>
          </div>
        );
    }
}
