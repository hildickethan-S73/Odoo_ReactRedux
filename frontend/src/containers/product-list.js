import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions';
import { bindActionCreators } from 'redux';
import agent from '../agent';

class ProductList extends Component {
  renderList() {
    return this.props.products.map((product) => {
      return (
        <li 
          key={product.name} 
          className="list-group-item"
          onClick={() => this.props.selectProduct(product)}>
          {product.name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4 book-list">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

// Anything returned from this function will end up as props on 
// ProductList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed
  // to all reducers
  return bindActionCreators({ selectProduct: selectProduct }, dispatch);
}

// Promote ProductList from component to container - needs to know about
// dispatch method selectBook.  Make available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
