import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { RESTAURANTS_LOAD, RESTAURANTS_UNLOAD, RESTAURANT_SELECTED, RESTAURANT_CREATE } from '../../constants/actionTypes';
import Restaurants from './Restaurants';

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
        <div>
          <input type="button" className="btn btn-success"value="Create" onClick={this.create} />
          {(!this.props.user || !this.props.user.id) && <Link to="/register" className="btn btn-info">Register</Link>}
          {(!this.props.user || !this.props.user.id) && <Link to="/login" className="btn btn-info">Login</Link>}
        </div>
        <Restaurants restaurants={this.props.restaurants} selectRestaurant={this.props.selectRestaurant} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
