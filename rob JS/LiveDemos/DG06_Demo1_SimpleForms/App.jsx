import React from 'react';
import ReactDOM from 'react-dom';


export default class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.clearInputBetter = this.clearInputBetter.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                value: event.target.value
            }
        );
        console.log("handleChange called...");
    }

    // handleSubmit(event) {
    //     alert(`Value submitted was ${this.state.value}`);
    //     event.preventDefault();
    //     console.log("handleSubmit called...")
    // }

    clearInput(event) {
        event.preventDefault();
        this.setState(
            {
                value: ''
            }
        );
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    clearInputBetter(event) {
        event.preventDefault();
        this.setState({
            value: ''
        });
        this.myFormRef.focus();
    }

    render() {
        return (

            <form>
                <p>
                    <input type="text" placeholder="I have no state or value stored" />
                </p>
                <p>
                    {/*<input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        ref="myInput"
                    />*/}
                    <input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        ref={el => this.myFormRef = el}
                    />
                </p>
                <p>
                    <input type="text" placeholder="I have no state or value stored" />
                </p>
                <p>
                    {/*<button onClick={this.clearInput}>CLEAR</button>*/}
                    <button onClick={this.clearInputBetter}>BETTER CLEAR</button>
                </p>
                <h4>{this.state.value}</h4>
            </form>
        );
    }
}

            {/*<form onSubmit={this.handleSubmit}>
                <label htmlFor="Name">
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />    
                </label>
                <input type="submit" value="Submit" />
            </form>             */}