import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4 book-list">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on 
// BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed
  // to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container - needs to know about
// dispatch method selectBook.  Make available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
