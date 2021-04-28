import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { categories } from '../categories/Categories';
import { createBook } from '../actions/index';

function BooksForm({ createBook }) {
  const [values, setValues] = useState({
    id: '',
    title: '',
    category: 'Action',
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, category } = values;

    createBook({
      id: Math.floor(Math.random() * 1111).toString(),
      title,
      category,
    });

    setValues({
      id: '',
      title: '',
      category: '',
    });
  };

  return (
    <div className="form-container container">
      <h3 className="mt-4 mb-3">Add New Book</h3>
      <Form onSubmit={handleSubmit} className="add-book-form d-flex mt-5">
        <Form.Group className="addbook-input">
          <Form.Control type="input" className="title-input" name="title" id="title" placeholder="enter book name" value={values.title} onChange={handleChange} />
        </Form.Group>
        <div className="addbook-right">
          <Form.Control as="select" className="cat-input" name="category" id="category" value={values.category} onChange={handleChange}>
            {categories.map((category) => (
              <option key={`${category}`} value={category}>
                {category}
              </option>
            ))}
          </Form.Control>
          <Button className="addbook-btn" type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
