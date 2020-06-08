import React from 'react';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => [
  <ModuleRoute path="/" moduleName="infoxicator-main" />,
  <ModuleRoute path="/:postSlug" moduleName="infoxicator-content" />,
];

export default childRoutes;
