import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { categories } from '../categories/Categories';

const CategoryFilter = ({ onSelectHandler }) => (
  <Form>
    <Form.Group
      controlId="exampleForm.CategorySelect1"
      className="selectbox d-flex"
    >
      <Form.Control as="select" className="mt-1" name="category" id="category" onChange={(e) => onSelectHandler(e.target.value)}>
        {['All', ...categories].map((category) => (
          <option key={`${category}`} value={category}>
            {category}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </Form>
);

CategoryFilter.propTypes = {
  onSelectHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
