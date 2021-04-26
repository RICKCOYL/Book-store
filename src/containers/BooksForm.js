/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { categories } from '../categories/Categories';
import { CREATE_BOOK } from '../Actions';

function BooksForm() {
  const [values, setValues] = useState({
    title: '',
    category: 'Action',
  });

  const handleChange = (e) => {
    const { value } = e.target;
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const { title, category } = values;
  };

  return (
    <div>
      <h3>Add New Book</h3>
      <form>
        <div>
          <span>Title: </span>
          <br />
          <input type="text" name="title" id="title" placeholder="enter book name" value={values.title} onChange={handleChange} />
        </div>
        <div>
          <span>Category: </span>
          <br />
          <select name="category" id="category" value={values.category} onChange={handleChange}>
            {categories.map((category) => (
              <option key={`${category}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button onSubmit={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createBook: () => dispatch({ type: CREATE_BOOK }),
});

export default connect(null, mapDispatchToProps)(BooksForm);
