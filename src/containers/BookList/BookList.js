import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  makeBooksErrorSelector,
  makeBooksFetchingSelector,
  makeBooksMapSelector
} from "./books-selector";
import BookItem from "./BookItem";
import "./_style.scss";

const makeStateToProps = createStructuredSelector({
  books: makeBooksMapSelector(),
  isFetching: makeBooksFetchingSelector(),
  error: makeBooksErrorSelector()
});

class BookList extends Component {
  render() {
    const { books, isFetching, error } = this.props;

    if (error) {
      return (
        <div className="books__error">
          Oops!! Something is wrong, please try again!!!
        </div>
      );
    }

    if (isFetching) {
      return (
        <div className="books__fetching">
          <span className="loader" />
          <span>Loading books...</span>
        </div>
      );
    }
    return (
      <div className="books">
        {books.valueSeq().map(book => (
          <BookItem key={book.get("id")} book={book} />
        ))}
      </div>
    );
  }
}

export default connect(makeStateToProps)(BookList);
