import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RESTAURANT_LOAD, RESTAURANT_UNLOAD } from '../constants/actionTypes';
import agent from '../agent';
import Restaurants from '../components/Restaurants';

const mapStateToProps = (state) => ({
  ...state,
  restaurants: state.restaurants
})

const mapDispatchToProps = (dispatch) => ({
  onLoad: restaurants => dispatch({
    type: RESTAURANT_LOAD,
    payload: restaurants
  }),
  onUnload: () => dispatch({ 
    type: RESTAURANT_UNLOAD 
  })
})

class ProductList extends Component {
  componentWillMount() {
    this.props.onLoad(Promise.resolve(
      agent.Restaurants.getAll()
    ))
  }

  render() {
    return (
        <Restaurants restaurants={this.props.restaurants} />
    );
  }
}

// Promote ProductList from component to container - needs to know about
// dispatch method selectBook.  Make available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
