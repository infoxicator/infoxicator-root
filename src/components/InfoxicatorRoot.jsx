import React, { Fragment } from 'react';
import ModuleRoute from 'holocron-module-route';
import Helmet from 'react-helmet';

const InfoxicatorRoot = ({ children }) => (
  <Fragment>
    <Helmet
      title="Infoxicator | One App | Microfrontend | tutorial | React"
      link={[
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css' },
      ]}
    />
    {children}
  </Fragment>
);

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/Routing.md#childroutes
InfoxicatorRoot.childRoutes = () => [
  <ModuleRoute path="/" moduleName="infoxicator-main" />,
];

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/App-Configuration.md
if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  InfoxicatorRoot.appConfig = require('../appConfig').default;
}

export default InfoxicatorRoot;
