import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: 'Default value'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.value}`);
        alert(`${this.input.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="Name">Name: </label>
                {/* Specify initial value but leave subsequent updates uncontrolled */}
                <input type="text" defaultValue={this.state.value} ref={(input)=>this.input = input} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}