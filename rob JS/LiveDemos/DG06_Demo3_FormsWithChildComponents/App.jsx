import React from 'react';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }

        this.updateState = this.updateState.bind(this);
        
    }

    updateState(e) {
        this.setState(
            {
                data: e.target.value
            }
        );
    }

    render() {
        return (
            <div>
                <Content myDataProp={this.state.data} updateStateProp={this.updateState} />
            </div>
        );
    }
}

const Content = (props) => (
    <div>
        <input 
            type="text"
            value={props.myDataProp}
            onChange={props.updateStateProp}
        />
        <h3>{props.myDataProp}</h3>
    </div>
);