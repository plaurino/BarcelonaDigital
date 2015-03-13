/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'luke',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
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


  // production environment config (is default)

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self' http://fonts.gstatic.com/",
    'connect-src': "'self' http://104.236.50.158:4200",
    'img-src': "'self' http://104.236.50.158:4200",
    'style-src': "'self' http://fonts.gstatic.com",
    'media-src': "'self'"
  };

  ENV['simple-auth'] = {
    authenticationRoute: 'users.login',
    routeAfterAuthentication: 'collections.main',
    crossOriginWhitelist: ['http://104.236.50.158:3000'],
    authorizer: 'authorizer:kiosko'
  };

  ENV.APP.KIOSKO = 'http://104.236.50.158:3000';

  ENV['torii'] = {
    providers: {
      'facebook-connect': {
        appId: '759804940768080'
      },
      'google-oauth2': {
        apiKey: '623929730156-1pspb352389ccipijalrctveo7tc4ur9.apps.googleusercontent.com',
        redirectUri: 'http://104.236.50.158:4200'
      }
    }
  };


  // development environment config

  if (environment === 'development') {

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' http://fonts.gstatic.com/",
      'connect-src': "'self' barcelonadigital-dev.com:3000",
      'img-src': "'self' barcelonadigital-dev.com:4200",
      'style-src': "'self' http://fonts.gstatic.com",
      'media-src': "'self'"
    };

    ENV.APP.KIOSKO = 'http://barcelonadigital-dev.com:3000';

    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['torii'] = {
      providers: {
        'facebook-connect': {
          appId: '759804940768080'
        },
        'google-oauth2': {
          apiKey: '623929730156-1pspb352389ccipijalrctveo7tc4ur9.apps.googleusercontent.com',
          redirectUri: 'http://barcelonadigital-dev.com:4200'
        }
      }
    };

    ENV['simple-auth'] = {
      authenticationRoute: 'users.login',
      routeAfterAuthentication: 'collections.main',
      crossOriginWhitelist: ['http://barcelonadigital-dev.com:3000'],
      authorizer: 'authorizer:kiosko'
    };
  }


  // testing environment config

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV.APP.TOKEN_URL = ENV.APP.KIOSKO + '/token';

  return ENV;
};
