import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RESTAURANTS_LOAD, RESTAURANTS_UNLOAD, RESTAURANT_SELECTED, RESTAURANT_CREATE, AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT } from '../../constants/actionTypes';
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
  }),
  createRestaurant: newlist => dispatch({
    type: RESTAURANT_CREATE,
    payload: newlist
  }),
  register: returnedUser => dispatch({
    type: AUTH_REGISTER,
    payload: returnedUser
  }),
  login: returnedUser => dispatch({
    type: AUTH_LOGIN,
    payload: returnedUser
  }),
  logout: loggedoutUser => dispatch({
    type: AUTH_LOGOUT,
    payload: loggedoutUser
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

  login = () => {
    let credentials = {
      "name": "registe3",
      "password": "plaintext"
    };

    this.props.login(Promise.resolve(
      agent.Auth.login(credentials)
    ))
  }

  register = () => {
    let credentials = {
      "name": "registe3",
      "password": "plaintext"
    };

    this.props.register(Promise.resolve(
      agent.Auth.register(credentials)
    ))
  }

  logout = () => {
    this.props.logout(Promise.resolve(
      agent.Auth.logout()
    ))
  }

  render() {
    return (
      <div>
        <div>
          <input type="button" value="Create" onClick={this.create} />
          <input type="button" value="Login" onClick={this.login} />
          <input type="button" value="Register" onClick={this.register} />
          <input type="button" value="Logout" onClick={this.logout} />
        </div>
        <Restaurants restaurants={this.props.restaurants} selectRestaurant={this.props.selectRestaurant} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
