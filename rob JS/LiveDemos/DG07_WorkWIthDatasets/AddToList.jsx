import React from 'react';

// Needs to be a class because it will have its own state
export default class AddToList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            country: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(valueName) {
        return (event) => {
            this.setState(
                {
                    [valueName]: event.target.value
                }
            );
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        // Call the onSubmit function passed through by props
        this.props.onSubmit(this.state);

        // After submitting the form, users expect form to clear
        this.setState(
            {
                name: '',
                country: ''
            }
        )        
    }

    render() {
        return (
            <form id="addPerson" className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    &nbsp;
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                    />
                </div>
                &nbsp;
                <div className="form-group">
                    <label htmlFor="country">Country: </label>
                    &nbsp;
                    <input 
                        type="text" 
                        className="form-control" 
                        name="country" 
                        value={this.state.country}
                        onChange={this.handleChange('country')}
                    />
                </div>
                &nbsp;
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}