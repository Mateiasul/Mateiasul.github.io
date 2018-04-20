// See: https://reacttraining.com/react-router/web/api/
import React from 'react';
// import the classes below to use version 4 routing
import {
  BrowserRouter as Router,  // Uses HTML5 history API to keep UI in sync with URL
  Route,                    // Renders some UI when location mathces route's path
  Link                      // Provides declarative, accessible navigation around app
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        {/* Define the navigation for this component */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/content1">Content 1</Link></li>
        <li><Link to="/content2">Content 2</Link></li>
      </ul>
      <hr />

    {/* Define the routes for the application and their components */}
      <Route exact path="/" component={Home} />
      {/* If you only want to match '/' then 'exact' is needed otherwise all urls */}
      {/* that start with '/' will be matched...*/}
      <Route path="/content1" component={Content1} />
      <Route path="/content2" component={Content2} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Content1 = () => (
  <div>
    <h2>Content 1 placeholder</h2>
  </div>
);

// Uses the Route here for matching purposes
const Content2 = ({ match }) => (
  <div>
    <h2>Content 2 placeholder</h2>
    <ul>
      {/* Define the sub-navigation for this component */}
      <li><Link to={`${match.url}/subcontent1`}>Subcontent 1</Link></li>
      <li><Link to={`${match.url}/subcontent2`}>Subcontent 2</Link></li>
      <li><Link to={`${match.url}/subcontent3`}>Subcontent 3</Link></li>
    </ul>

    {/* Define the sub-routes for this component, parameter matching also used */}
    <Route path={`${match.url}/:subcontentId`} component={SubContent} />
    <Route exact path={match.url} render = {() => (
        <h3>Please select the subcontent</h3>
      )} />
  </div>
)

// Uses Route here for matching purposes
const SubContent = ({ match }) => (
  <div>
    {/* Output the sub-url here */}
    <h3>{match.params.subcontentId}</h3>
  </div>
)

export default App;
