import React from 'react';
import { Link } from 'react-router-dom';
/* Notes:
    Link - Provides declarative, accessible navigation around application
*/

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

export default Header;
