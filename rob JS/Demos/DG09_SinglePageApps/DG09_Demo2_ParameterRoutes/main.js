import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
/* Notes:
    BrowserRouter - a <Router> that uses the HTML5 history API to keep UI in sync with URL
    Router - common low-level interface for all router components
    Route - Most important to understand and learn to use well - most basic
            responsibility is to render some UI when a location matches the route's path
    Switch - Switch renders the first child (Route or Redirect) that matches the location
    Link - Provides declarative, accessible navigation around application
*/

const PlayerAPI = {
  players: [
    {number: 1, name: "Gary Goalie", position: "G" },
    {number: 2, name: "Dave Defender", position: "D" },
    {number: 3, name: "Freddie Fullback", position: "D" },
    {number: 4, name: "Matty Midfielder", position: "M" },
    {number: 5, name: "Wayne Winger", position: "W" },
    {number: 6, name: "Sammy Striker", position: "F"}
  ],
  all: function() {return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
};

// SquadList iterates over all the players and creates a link
// to their profile page
const SquadList = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/squad/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

// Player looks up the player using the number parsed from the URL's pathname
// If no player is found with the given number, then "player not found" is displayed
const Player = (props) => {
  const player = PlayerAPI.get(
    // match contains information about how a Route path matched the URL
    // Contains:
    //  params - key/value pairs parsed from URL corresponding to dynamic segments of path
    //  isExact - true if entire URL is matched (no trailing chars)
    //  path - string of path pattern used to match (useful for building nested <Route>s)
    //  url - string representing matched portion of URL - usful for building nested <Link>s
    parseInt(props.match.params.number, 10)
  );
  if(!player) {
    return <div>Sorry, that player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (Squad Number: {player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/squad'>Back</Link>
    </div>
  );
}

// Squad Component matches one of two different routes depending on full pathname
const Squad = () => (
  <Switch>
    <Route exact path="/squad" component={SquadList} />
    <Route path="/squad/:number" component={Player} />
  </Switch>
);

const Results = () => (
  <div>
    <ul>
      <li>React United 3 - 0 Angular Juniors</li>
      <li>Ember Town 2 - 2 React United</li>
      <li>React United 1 - 3 JS Meteors</li>
    </ul>
  </div>
);

const Home = () => (
  <div>
    <h1>Welcome to the React United Website!</h1>
  </div>
);

// Main component renders one of the three provided routes (provided there is a match)
// Both /squad and /results will match ANY pathname that starts with /squad or /results
// The / route will only match when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/squad" component={Squad} />
      <Route path="/results" component={Results} />
    </Switch>
  </main>
);

// Header component creates a link that can be used to navigate between routes
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/squad">Squad</Link></li>
        <li><Link to="/results">Results</Link></li>
      </ul>
    </nav>
  </header>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#app")
);
