import contentSecurityPolicyBuilder from 'content-security-policy-builder';

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
      'cdn.jsdelivr.net',
      'cdnjs.cloudflare.com',
      '*.now.sh',
    ],
    fontSrc: [
      "'self'",
      'data:',
      'fonts.gstatic.com',
    ],
    imgSrc: [
      "'self'",
      '*.infoxication.net',
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'cdn.jsdelivr.net',
      'cdnjs.cloudflare.com',
      'fonts.googleapis.com',
      'maxcdn.bootstrapcdn.com',
    ],
    connectSrc: [
      "'self'",
      'www.infoxication.net',
    ],
  },
});
