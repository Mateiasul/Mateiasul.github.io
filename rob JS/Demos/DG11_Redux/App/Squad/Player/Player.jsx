import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Player extends React.Component {

  render() {
    return(
      <div>
        {(this.props.match) ? this.props.squad.map(player => (
            (player.id === parseInt(this.props.match.params.number)) ? 
              <div key={player.id}>
                <div>
                  <h3>{player.name} (Squad Number: {player.id})</h3>
                  <h4>Position: {player.position}</h4>
                </div>
                <Link to='/squad'>Back</Link>
              </div> 
            : false )) 
          : ((this.props.player !== undefined) ? 
              <div>
                <h3>{this.props.player.name} (Squad Number: {this.props.player.id})</h3>
                <h4>Position: {this.props.player.position}</h4>
              </div> 
            : false)
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    squad: state.squad
  }
}

export default connect(mapStateToProps)(Player);
