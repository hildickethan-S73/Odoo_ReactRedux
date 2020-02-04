import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantDetail extends Component {
  render() {
    if (!this.props.activeRestaurant) {
      return (
        <div className="col-sm-8 book-detail">
          <h3 className="book-detail__header">Select a product to get started!</h3>
        </div>
      );
    }

    return (
      <div className="col-sm-8 book-detail">
        <h3 className="book-detail__header">Details for: {this.props.activeRestaurant.name}</h3>
        <div>name: {this.props.activeRestaurant.name}</div>
        <div>description: {this.props.activeRestaurant.description}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.restaurants.activeRestaurant
  };
}

export default connect(mapStateToProps)(RestaurantDetail);
