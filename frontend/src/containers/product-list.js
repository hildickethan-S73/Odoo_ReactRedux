import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restaurantLoad } from '../actions';
import agent from '../agent';
import Restaurants from '../components/Restaurants';

const mapStateToProps = (state) => ({
  products: state.products,
  restaurants: state.restaurants
})

const mapDispatchToProps = (dispatch) => ({
  onLoad(restaurants){
    dispatch(restaurantLoad(restaurants))
  }
})

class ProductList extends Component {
  componentWillMount() {
    this.props.onLoad(Promise.resolve(
      agent.Restaurants.getAll()
    ))
  }

  render() {
    return (
      <ul className="list-group col-sm-4 book-list">
        <Restaurants props={this.props} />
      </ul>
    );
  }
}

// Promote ProductList from component to container - needs to know about
// dispatch method selectBook.  Make available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
