import React from 'react';
import { Link } from 'react-router-dom';

//import PlayerAPI from './playerAPI';

export default class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {},
      playerReturned: false
    }
  }

  componentWillMount() {
    let playerToFetch = (this.props.match) ? this.props.match.params.number : Math.floor(Math.random() * 6) + 1;
    fetch(`http://localhost:3000/players/${parseInt(playerToFetch, 10)}`)
      .then(response => response.json())
      .then(player => this.setState({
        player,
        playerReturned: true
      }));
  }

  render() {
    return(
      <div>
        {(this.state.playerReturned === true) ?
          <div>
            <h3>{this.state.player.name} (Squad Number: {this.state.player.id})</h3>
            <h4>Position: {this.state.player.position}</h4>
            {this.props.match ? <Link to='/squad'>Back</Link> : false}
          </div>
          :
          <div>Sorry, that player was not found</div>
        }
    </div>
    );
  }
}
