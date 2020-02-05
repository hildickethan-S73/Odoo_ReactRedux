import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RESTAURANTS_LOAD, RESTAURANTS_UNLOAD, RESTAURANT_SELECTED } from '../../constants/actionTypes';
import agent from '../../agent';
import Restaurants from './Restaurants';

const mapStateToProps = (state) => ({
  ...state,
  restaurants: state.restaurants
})

const mapDispatchToProps = (dispatch) => ({
  onLoad: restaurants => dispatch({
    type: RESTAURANTS_LOAD,
    payload: restaurants
  }),
  onUnload: () => dispatch({ 
    type: RESTAURANTS_UNLOAD 
  }),
  selectRestaurant: (restaurant) => dispatch({
    type: RESTAURANT_SELECTED,
    payload: restaurant
  })
})

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.props.onLoad(Promise.resolve(
      agent.Restaurants.getAll()
    ))
  } 

  render() {
    // console.log(agent.Restaurants.update('agentman',{'name':'agentman','description':'agentdesc'}));

    return (
        <Restaurants restaurants={this.props.restaurants} selectRestaurant={this.props.selectRestaurant} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
