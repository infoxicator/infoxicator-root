import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Footer = ({ languageData }) => (
  <React.Fragment>
    <Navbar bg="light" variant="light">
      <Nav className="m-auto">
        <Nav.Link href="https://github.com/americanexpress/one-app" target="_blank" rel="noreferrer">
          { languageData.madeWith } <span role="img" aria-label="heart" className="mr-2">❤️</span>{ languageData.using }
        </Nav.Link>
      </Nav>
    </Navbar>
    <Navbar bg="light" variant="light">
      <Nav className="m-auto">
        <p className="text-center" style={{ fontSize: '0.5rem' }}>{ languageData.disclaimer }</p>
      </Nav>
    </Navbar>
  </React.Fragment>
);
export default Footer;
