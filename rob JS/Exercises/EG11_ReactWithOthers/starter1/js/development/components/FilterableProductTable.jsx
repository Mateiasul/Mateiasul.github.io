import React from 'react';

import ProductTable from './subcomponents/ProductTable';
import SearchBar from './subcomponents/SearchBar';

export default class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>

    );
  }
}
