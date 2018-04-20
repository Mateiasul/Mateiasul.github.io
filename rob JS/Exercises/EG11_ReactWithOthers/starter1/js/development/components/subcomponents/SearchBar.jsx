import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
        />
      <p>
        <input
          type="checkbox"
        />
      {' '}
      Check to only show products in stock
      </p>
      </form>
    )
  }
}
