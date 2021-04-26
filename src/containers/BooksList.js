import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';

function BooksList({ books }) {
  return (
    <div>
      <table>
        <tbody>
          {books.map((book) => (<Book book={book} key={book.id} />))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
};
