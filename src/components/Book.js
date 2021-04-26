import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleRemove }) {
  const {
    id, title, category,
  } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={(e) => handleRemove(e, book)}>Remove Book</button></td>
    </tr>
  );
}

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,

  }),
  handleRemove: PropTypes.func.isRequired,
};
