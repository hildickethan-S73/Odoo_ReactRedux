import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RESTAURANTS_LOAD, RESTAURANTS_UNLOAD, RESTAURANT_SELECTED, RESTAURANT_CREATE } from '../../constants/actionTypes';
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
  createRestaurant: newlist => {
    dispatch({
      type: RESTAURANT_CREATE,
      payload: newlist
    })
  }
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
      "name": "create7",
      "description": "asdjnasjdbahbdhabj"
    };
    
    this.props.createRestaurant(Promise.resolve(
      agent.Restaurants.create(newrestaurant)
    ))
  }

  render() {
    // console.log(agent.Restaurants.update('agentman',{'name':'agentman','description':'agentdesc'}));

    return (
      <div>
        <div><input type="button" value="Create" onClick={this.create} /></div>
        <Restaurants restaurants={this.props.restaurants} selectRestaurant={this.props.selectRestaurant} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
