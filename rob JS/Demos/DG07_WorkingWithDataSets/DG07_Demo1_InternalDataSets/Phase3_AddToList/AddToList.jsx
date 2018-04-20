// 1.1 - Create AddToList component
import React from 'react';

// This needs to be a class because it will hold its own state
// We will pass this state back to the App component
export default class AddToList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      country: ''
    }
  }

  // render() {
  //   // Create a form to allow a user to enter their name and country
  //   // Bootstrap has been added to the index.html file to beautify it!
  //   // As this is JSX, attributes class is className and for is htmlFor
  //   return (
  //     <form id="addPerson" className="form-inline">
  //       <div className="form-group">
  //         <label htmlFor="name">Name: </label>
  //         &nbsp;
  //         <input type="text" className="form-control" name="name" />
  //       </div>
  //       &nbsp;
  //       <div className="form-group">
  //         <label htmlFor="country">Country: </label>
  //         &nbsp;
  //         <input type="text" className="form-control" name="country" />
  //       </div>
  //       &nbsp;
  //       <button type="submit" className="btn btn-default">Submit</button>
  //     </form>
  //   );
  // }
  // 1.3 Add the <AddToList /> component to the render method in App.jsx

  // 1.4 Modify the render method so this component's state is updated when the
  // text box value changes...
  // Add value and onChange calls to the inputs
  // Add an onChange method to update state
  render() {
    return (
      <form id="addPerson" className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        {/* 1.6 - Modify the form so the desired behaviour can be achieved */}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          &nbsp;
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.handleChange('name').bind(this)}
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
            onChange={this.handleChange('country').bind(this)}
          />
        </div>
        &nbsp;
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }

  // 1.5 - Add handleChange function to update the state
  handleChange(valueName) {
      return (event) => {
        this.setState({
          [valueName]: event.target.value
        });
      };
  }

  // 1.7 - Add handleSubmit function
  handleSubmit(event) {
    // Stop the default behaviour
    event.preventDefault();
    // Call the yet uncreated onSubmit function from the parent component
    // pass in the current state of this component
    this.props.onSubmit(this.state);
    // Reset the form for the next entry
    this.setState({
      name: '',
      country: ''
    });
    // Now deal with onSubmit in App component
  }
}
