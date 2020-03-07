import React, { Fragment } from 'react';
import ModuleRoute from 'holocron-module-route';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const InfoxicatorRoot = ({ children }) => (
  <Fragment>
    <Helmet
      title="Infoxicator | One App | Microfrontend | tutorial | React"
      link={[
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css' },
        {
          rel: 'icon', type: 'image/jpg', href: 'http://www.infoxication.net/wp-content/uploads/2020/03/favicon.jpg', sizes: '16x16',
        },
      ]}
    />
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#004953' }}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://infoxicator.com">
          <img src="http://www.infoxication.net/wp-content/uploads/2020/03/infoxicator.com_.png" width="210" height="24" alt="infoxicator.com logo" />
        </a>
      </div>
    </nav>
    <section className="section">
      {children}
    </section>
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
