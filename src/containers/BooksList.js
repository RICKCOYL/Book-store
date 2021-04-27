import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import * as actions from '../actions';

function BooksList({ books, removeBook }) {
  const handleRemoveBook = (e, book) => {
    e.preventDefault();
    removeBook(book.id);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book book={book} key={book.id} handleRemove={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { books, removeBook } = state;
  return { books, removeBook };
};

export default connect(mapStateToProps, actions)(BooksList);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
  removeBook: PropTypes.func.isRequired,
};
