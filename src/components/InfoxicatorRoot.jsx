import React, { Fragment } from 'react';
import ModuleRoute from 'holocron-module-route';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';

const InfoxicatorRoot = ({ children }) => (
  <Fragment>
    <Helmet
      title="Infoxicator | One App | Microfrontend | tutorial | React"
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism-tomorrow.min.css' },
        {
          rel: 'icon', type: 'image/jpg', href: 'http://www.infoxication.net/wp-content/uploads/2020/03/favicon.jpg', sizes: '16x16',
        },
      ]}
    />
    <CssBaseline />
    <Header />
    <Container maxWidth="lg">
      {children}
    </Container>
  </Fragment>
);

InfoxicatorRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

InfoxicatorRoot.childRoutes = () => [
  <ModuleRoute path="/" moduleName="infoxicator-main" />,
  <ModuleRoute path="/:postSlug" moduleName="infoxicator-content" />,
];

if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  InfoxicatorRoot.appConfig = require('../appConfig').default;
}

export default InfoxicatorRoot;
