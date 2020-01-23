import React, { Component } from 'react';
import ProductList from '../containers/product-list';
import ProductDetail from '../containers/product-detail';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ProductList />
          <ProductDetail />
        </div>
      </div>
    );
  }
}

export default App;
