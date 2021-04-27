import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
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
    <div className="user-icon">
      <Nav.Link className="linkText mr-5" href="/quote">
        {' '}
        <FontAwesomeIcon className="user-icon" icon={faUserAlt} />
      </Nav.Link>
    </div>

  </Navbar>
);

export default NavBar;
