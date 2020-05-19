import React, { Fragment } from 'react';
import ModuleRoute from 'holocron-module-route';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import SEO from '@americanexpress/react-seo';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

const InfoxicatorRoot = ({ children }) => (
  <Fragment>
    <Helmet
      title="Infoxicator | One App | Microfrontend | tutorial | React"
      meta={[{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism-tomorrow.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/line-numbers/prism-line-numbers.min.css' },
        {
          rel: 'icon', type: 'image/jpg', href: 'https://www.infoxication.net/wp-content/uploads/2020/03/favicon.jpg', sizes: '16x16',
        },
      ]}
    />
    <SEO
      author="Ruben Casas"
      description="Learn microfrontends patterns in React 💠💠💠"
      keywords={['react', 'tutorial', 'microfrontend', 'holocron']}
      lang="en-GB"
      meta={[{ charset: 'utf-8' }]}
    />
    <ErrorBoundary>
      <Header />
      {children}
      <Footer />
    </ErrorBoundary>
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
