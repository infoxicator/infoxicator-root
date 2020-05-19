import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Footer = () => (
  <React.Fragment>
    <Navbar bg="light" variant="light">
      <Nav className="m-auto">
        <Nav.Link href="https://github.com/americanexpress/one-app" target="_blank">
          Made with <span role="img" aria-label="heart">❤️</span>using One App
        </Nav.Link>
      </Nav>
    </Navbar>
    <Navbar bg="light" variant="light">
      <Nav className="m-auto">
        <p className="text-center" style={{ fontSize: '0.5rem' }}>Thoughts === mine !== my employers... All views expressed on this site are my own and do not represent the opinions of any entity with which I have been, am now or will be affiliated with.</p>
      </Nav>
    </Navbar>
  </React.Fragment>
);
export default Footer;
