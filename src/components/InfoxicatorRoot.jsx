import React, { Fragment } from 'react';
import ModuleRoute from 'holocron-module-route';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import '../root.scss';

const InfoxicatorRoot = ({ children }) => (
  <Fragment>
    <Helmet
      title="Infoxicator | One App | Microfrontend | tutorial | React"
      meta={[{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism-tomorrow.min.css' },
        {
          rel: 'icon', type: 'image/jpg', href: 'http://www.infoxication.net/wp-content/uploads/2020/03/favicon.jpg', sizes: '16x16',
        },
      ]}
    />
    <Header />
    <Container fluid="md" className="mt-5">{children}</Container>


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
