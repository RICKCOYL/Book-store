import React from 'react';
import categories from '../categories/Categories';

export default function BooksForm() {
  return (
    <div>
      <h3>Add New Book</h3>
      <form>
        <div>
          <span>Book Name: </span>
          <br />
          <input type="text" name="title" id="title" placeholder="enter book name" />
        </div>
        <div>
          <span>Book Category: </span>
          <br />
          <select name="category" id="category">
            {categories.map((category) => (
              <option key={`${category}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
