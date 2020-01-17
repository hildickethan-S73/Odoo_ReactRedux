import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return (
        <div className="col-sm-8 book-detail">
          <h3 className="book-detail__header">Select a book to get started!</h3>
        </div>
      );
    }

    return (
      <div className="col-sm-8 book-detail">
        <h3 className="book-detail__header">Details for: {this.props.activeBook.title}</h3>
        <div>Author: {this.props.activeBook.author}</div>
        <div>Pages: {this.props.activeBook.pages}</div>
        <div>Synopsis: {this.props.activeBook.synopsis}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
