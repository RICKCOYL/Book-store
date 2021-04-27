/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import * as actions from '../actions/index';

function BooksList({ books, removeBook, filter }) {
  const handleRemoveBook = (e, book) => {
    e.preventDefault();
    removeBook(book.id);
  };

  const handleFilterChange = (fil) => {
    filter(fil);
  };

  return (
    <div>
      <CategoryFilter onSelectHandler={handleFilterChange} />
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
  const {
    books, removeBook, catfilter, filter,
  } = state;
  if (catfilter !== 'All' || '') {
    const result = books.filter((book) => book.category === catfilter);
    return { books: result };
  }

  return { books, removeBook, filter };
};

export default connect(mapStateToProps, actions)(BooksList);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};
