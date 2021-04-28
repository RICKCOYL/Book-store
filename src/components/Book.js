/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import progressBar from '../assets/images/progress.png';

export default function Book({ book, handleRemove }) {
  const {
    title, category,
  } = book;

  return (
    <Card className="container card mb-3">
      <Card.Body className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-column fixed-width">
          <span className="category">{category}</span>
          <span className="header">{title}</span>
          <a href="#" className="category mb-3 mr-3">
            Suzanne Collins
          </a>
          <div className="d-flex flex-row ">
            <a href="#" className="category mr-1">
              Like
            </a>
            <a
              href="#"
              className="category remove-book mr-1 px-1"
              onClick={(e) => {
                handleRemove(e, book);
              }}
            >
              Remove
            </a>
            <a href="#" className="category">
              Edit
            </a>
          </div>
        </div>
        <div className="progress-element d-flex align-items-center fixed-width">
          <img className="progress-image" src={progressBar} alt="progress-circle" />
          <div className="ml-3">
            <h5>25%</h5>
            <span>Completed</span>
          </div>
        </div>
        <div className="d-flex flex-column  justify-content-between fixed-width">
          <span className="current">CURRENT CHAPTER</span>
          <span className="chno">Chapter 17</span>
          <button
            type="button"
            className="update btn btn-primary"
          >
            UPDATE PROGRESS
          </button>
        </div>
      </Card.Body>
    </Card>
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
