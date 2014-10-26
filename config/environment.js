/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'luke',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self' http://fonts.gstatic.com/",
    'connect-src': "'self'",
    'img-src': "'self' http://revisbarcelona.com:8081",
    'style-src': "'self' http://fonts.gstatic.com",
    'media-src': "'self'"
  };

  ENV['KIOSKO'] = 'http://revisbarcelona:8083';

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }


  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['simple-auth'] = {
    authenticationRoute: 'users.login',
    routeAfterAuthentication: 'collections.main',
    crossOriginWhitelist: ['http://revisbarcelona.com:8080'],
    authorizer: 'authorizer:kiosko',
    store: 'simple-auth-session-store:local-storage'
  };


  ENV['torii'] = {
    providers: {
      'facebook-oauth2': {
        apiKey: '286966254835786',
        redirectUri: '//revisbarcelona.com:8083',
      }
    }
  };

  ENV['KIOSKO'] = 'http://localhost:3000/'

  return ENV;
};
