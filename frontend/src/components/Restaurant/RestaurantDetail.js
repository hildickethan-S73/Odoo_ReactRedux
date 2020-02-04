import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RESTAURANT_CHANGED, RESTAURANT_UPDATE } from "../../constants/actionTypes";
import agent from '../../agent';

const mapStateToProps = (state) => ({
  ...state,
  activeRestaurant: state.restaurants.activeRestaurant
})

const mapDispatchToProps = (dispatch) => ({
  changeRestaurant: update => dispatch({
    type: RESTAURANT_CHANGED,
    payload: update
  }),
  updateRestaurant: newrestaurant => dispatch({
    type: RESTAURANT_UPDATE,
    payload: newrestaurant
  })
})

class RestaurantDetail extends Component {
  change = (event) => {
    const target = event.target;
    this.props.changeRestaurant({
      activeRestaurant: this.props.activeRestaurant,
      target: target
    });
  }

  update = () => {
    let newrestaurant = this.props.activeRestaurant;
    console.log(newrestaurant);
    this.props.updateRestaurant(Promise.resolve(
      agent.Restaurants.update(newrestaurant.name, newrestaurant)
    ))
  }

  render() {
    if (!this.props.activeRestaurant) {
      return (
        <div className="col-sm-8 book-detail">
          <h3 className="book-detail__header">Select a restaurant to get started!</h3>
        </div>
      );
    }

    return (
      <div className="col-sm-8 book-detail">
        <h3 className="book-detail__header">Details for: {this.props.activeRestaurant.name}</h3>
        <div>Name: <input type="text" name="name" value={this.props.activeRestaurant.name} onChange={this.change}></input></div>
        <div>Description: <input type="text" name="description" value={this.props.activeRestaurant.description} onChange={this.change}></input></div>
        <div><input type="button" value="Update" onClick={this.update} /> </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
