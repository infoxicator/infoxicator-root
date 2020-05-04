import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <React.Fragment>
    <style type="text/css">
      {`
    .bg-primary {
      background-color: #004953!important;
  }`}
    </style>

    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">
        <img
          src="http://www.infoxication.net/wp-content/uploads/2020/03/infoxicator.com_.png"
          width="210"
          height="24"
          className="d-inline-block align-top"
          alt="Infoxicator.com Logo"
        />
      </Navbar.Brand>
    </Navbar>
  </React.Fragment>
);

export default Header;
