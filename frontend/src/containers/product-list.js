import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct, restaurantLoad } from '../actions';
import { bindActionCreators } from 'redux';
import agent from '../agent';

function mapStateToProps(state) {
  return {
    products: state.products,
    restaurants: state.restaurants
  };
}

// Anything returned from this function will end up as props on 
// ProductList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed
  // to all reducers
  return bindActionCreators({ 
    selectProduct: selectProduct, 
    onLoad: restaurantLoad
  }, dispatch);
}

class ProductList extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    
    this.props.onLoad(Promise.all([
      agent.Restaurants.getAll()
    ]))
  }


  renderList() {
    console.log(this.props.restaurants);
    console.log(this.props.products);
    
    // console.log(agent.Restaurants.getAll());
    // console.log(agent.Restaurants.getOne('product'));
    // console.log(agent.Restaurants.create('product2','desc'));
    
    
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

// Promote ProductList from component to container - needs to know about
// dispatch method selectBook.  Make available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
