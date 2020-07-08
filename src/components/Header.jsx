import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { connect } from 'react-redux';
import { MdTranslate } from 'react-icons/md';
import Button from 'react-bootstrap/Button';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    type="button"
    style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <MdTranslate style={{ marginRight: '0.5rem' }} />
    { children }
    &#x25bc;
  </Button>
));

const locales = { 'en-GB': 'English', 'es-ES': 'Español' };

const Header = ({ switchLanguage, localeName }) => (
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
          src="https://www.infoxication.net/wp-content/uploads/2020/03/infoxicator.com_.png"
          width="210"
          height="24"
          className="d-inline-block align-top"
          alt="Infoxicator.com Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Dropdown alignRight={true} title="Select Language" id="lang-nav-dropdown">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <span className="mr-1 d-none d-md-inline-block">{
            localeName.startsWith('es') ? locales['es-ES'] : locales['en-GB']
            }
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(locales).map((key) => (
              <Dropdown.Item
                onClick={() => switchLanguage(key)}
                key={key}
                value={key}
              >{locales[key]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
);

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async (locale) => {
    await dispatch(updateLocale(locale));
    await dispatch(loadLanguagePack('infoxicator-root', { fallbackLocale: 'en-GB' }));
  },
});

export default connect(null, mapDispatchToProps)(Header);
