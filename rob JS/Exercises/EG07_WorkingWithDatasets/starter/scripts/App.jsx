import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentAddress: 'QA Manchester',
      mapCoordinates: {
        lat: 53.475586,
        lng: -2.241402
      }
    }
  }

  searchForAddress(address) {
    let self = this;

    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        if(status !== 'OK') {
          self.setState( {
            currentAddress: "Location not found"
          });
          return;
        }

        let latlng = results[0].geometry.location;

        self.setState({
          currentAddress: results[0].formatted_address,
          mapCoordinates: {
            lat: latlng.lat(),
            lng: latlng.lng()
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Your Google Map Locations</h1>
        <Search onSearch={this.searchForAddress.bind(this)} />
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
        <CurrentLocation address={this.state.currentAddress} />
      </div>
    );
  }
}
