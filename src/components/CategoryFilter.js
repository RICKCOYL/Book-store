import React from 'react';
import { categories } from '../categories/Categories';

const CategoryFilter = () => (
  <div>
    <select name="category" id="category">
      {['ALL', ...categories].map((category) => (
        <option key={`${category}`} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
