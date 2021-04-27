import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../categories/Categories';

const CategoryFilter = ({ onSelectHandler }) => (
  <div>
    <select name="category" id="category" onChange={(e) => onSelectHandler(e.target.value)}>
      {['All', ...categories].map((category) => (
        <option key={`${category}`} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  onSelectHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
