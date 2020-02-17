import React, { Component } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { RESTAURANTS_LOAD, RESTAURANTS_UNLOAD, RESTAURANT_SELECTED, RESTAURANT_CREATE } from '../../constants/actionTypes';
import Restaurants from './Restaurants';
import ButtonsUserView from "../Auth/Restaurant/ButtonsUserView";

const mapStateToProps = (state) => ({
  ...state,
  restaurants: state.restaurants,
  user: state.auth.user
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
  }),
  createRestaurant: newlist => dispatch({
    type: RESTAURANT_CREATE,
    payload: newlist
  })
})

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.props.onLoad(Promise.resolve(
      agent.Restaurants.getAll()
    ))
  } 

  create = () => {
    let newrestaurant = {
      "name": "create"+Math.floor(Math.random()*1000),
      "description": "1111"
    };
    
    this.props.createRestaurant(Promise.resolve(
      agent.Restaurants.create(newrestaurant)
    ))
  }

  render() {
    return (
      <div>
        <ButtonsUserView user={this.props.user} create={this.create} />
        <Restaurants restaurants={this.props.restaurants} selectRestaurant={this.props.selectRestaurant} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
