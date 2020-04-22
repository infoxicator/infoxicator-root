import contentSecurityPolicyBuilder from 'content-security-policy-builder';
import ip from 'ip';

// Read about csp:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/App-Configuration.md#csp
export default contentSecurityPolicyBuilder({
  directives: {
    reportUri: `${process.env.ONE_CLIENT_REPORTING_URL}/report/security/csp-violation`,
    defaultSrc: [
      "'self'",
    ],
    scriptSrc: [
      "'self'",
      `${ip.address()}:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
      `localhost:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
      'https://cdn.jsdelivr.net/',
      'https://cdnjs.cloudflare.com',
    ],
    fontSrc: [
      "'self'",
      'data:',
      'https://fonts.gstatic.com/',
    ],
    imgSrc: [
      "'self'",
      'http://www.infoxication.net/',
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.jsdelivr.net/',
      'https://cdnjs.cloudflare.com',
      'https://fonts.googleapis.com',
      'https://maxcdn.bootstrapcdn.com',
    ],
    connectSrc: [
      "'self'",
      `${ip.address()}:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
      `localhost:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
      'http://www.infoxication.net/',
    ],
  },
});
