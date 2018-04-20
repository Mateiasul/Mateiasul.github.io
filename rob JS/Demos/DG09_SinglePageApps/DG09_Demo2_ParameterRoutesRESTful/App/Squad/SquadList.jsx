import React from 'react';
import { Link } from 'react-router-dom';

// SquadList iterates over all the players and creates a link
// to their profile page
export default class SquadList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3000/players`)
      .then(response => {
        return response.json()
      })
      .then(players => this.setState({players}))
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.players !== undefined ? this.state.players.map(p => (
              <li key={p.id}>
                <Link to={`/squad/${p.id}`}>{p.name}</Link>
              </li>
            )) : false
          }
        </ul>
      </div>
    );
  }
}
