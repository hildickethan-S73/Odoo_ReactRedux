import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import ProductList from '../containers/product-list';
import ProductDetail from '../containers/product-detail';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BookList />
          <BookDetail />
        </div>
        <div>
          <ProductList />
          <ProductDetail />
        </div>
      </div>
    );
  }
}

export default App;
