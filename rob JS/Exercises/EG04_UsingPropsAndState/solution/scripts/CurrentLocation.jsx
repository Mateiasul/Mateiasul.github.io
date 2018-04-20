import React from 'react';

export default class CurrentLocation extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
        <h4 id="save-location">{this.props.address}</h4>
      </div>
    )
  }
}

{/* Alternate solution as a functional component

const CurrentLocation = (props) => (
  <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
    <h4 id="save-location">{props.address}</h4>
  </div>
);

export default CurrentLocation;
*/}
