import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { filter } from '../actions/index';

const NavBar = ({ filter }) => {
  const handleFilterChange = (fil) => {
    filter(fil);
  };
  return (
    <Navbar
      className="nav-bar d-flex justify-content-between align-items-center"
      expand="lg"
    >
      <div className="d-flex align-items-center">
        <Navbar.Brand className="font-weight-bold" href="#home">
          <h1>BookStore CMS</h1>
        </Navbar.Brand>

        <p className="nav-books">BOOKS</p>
        <p className="nav-cat">CATEGORIES</p>
      </div>
      <div className="d-flex">
        <div className="filter-container">
          <CategoryFilter onSelectHandler={handleFilterChange} />
        </div>
        <div className="user-icon">
          <Nav.Link className="linkText mr-5" href="/quote">
            {' '}
            <FontAwesomeIcon className="user-icon" icon={faUserAlt} />
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

NavBar.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, { filter })(NavBar);
