import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import SEO from '@americanexpress/react-seo';
import { configureIguazuSSR } from 'iguazu-holocron';
import { connect } from 'react-redux';
import { loadLanguagePack } from '@americanexpress/one-app-ducks';
import { fromJS } from 'immutable';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import childRoutes from '../childRoutes';
import { reducer } from '../ducks';

const InfoxicatorRoot = ({ children, languageData, localeName }) => (
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
      keywords={['react', 'tutorial', 'micro-ui', 'micro frontends', 'holocron']}
      lang="en-GB"
      meta={[{ charset: 'utf-8' }]}
    />
    <ErrorBoundary>
      <Header localeName={localeName} />
      {children}
      <Footer languageData={languageData} />
    </ErrorBoundary>
  </Fragment>
);

InfoxicatorRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

InfoxicatorRoot.childRoutes = childRoutes;

if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  InfoxicatorRoot.appConfig = require('../appConfig').default;
}

export const mapStateToProps = (state) => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  // const localeName = activeLocale.split('-')[0];
  const languagePack = state.getIn(
    ['intl', 'languagePacks', localeName, 'infoxicator-root'],
    fromJS({})
  ).toJS();

  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName,
  };
};

export const loadModuleData = async ({ store, module, ownProps }) => {
  const { dispatch, getState } = store;
  const localeName = getState().getIn(['intl', 'activeLocale']);
  const fallbackLocale = localeName.startsWith('es') ? 'es-ES' : 'en-GB';
  await dispatch(loadLanguagePack('infoxicator-root', { fallbackLocale: 'en-GB' }));
  await configureIguazuSSR({ store, module, ownProps });
};

InfoxicatorRoot.holocron = {
  name: 'infoxicator-root',
  reducer,
  loadModuleData,
};

export default connect(mapStateToProps, null)(InfoxicatorRoot);
