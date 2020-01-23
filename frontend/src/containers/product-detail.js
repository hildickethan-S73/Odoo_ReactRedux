import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {
  render() {
    if (!this.props.activeProduct) {
      return (
        <div className="col-sm-8 book-detail">
          <h3 className="book-detail__header">Select a product to get started!</h3>
        </div>
      );
    }

    return (
      <div className="col-sm-8 book-detail">
        <h3 className="book-detail__header">Details for: {this.props.activeProduct.name}</h3>
        <div>name: {this.props.activeProduct.name}</div>
        <div>cost: {this.props.activeProduct.cost}</div>
        <div>description: {this.props.activeProduct.description}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeProduct: state.activeProduct
  };
}

export default connect(mapStateToProps)(ProductDetail);
