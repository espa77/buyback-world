/* jshint node: true */

module.exports = function(environment) {
    var ENV = {

        modulePrefix: 'buyback-world',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        contentSecurityPolicy: {
            'default-src': "'none'",
            'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
            'font-src': ["'self'", "https://fonts.gstatic.com"],
            'connect-src': [
                "'self'",
                "https://arcane-waters-10630.herokuapp.com/api/devices",
                "https://arcane-waters-10630.herokuapp.com/api/quotes",
                "https://arcane-waters-10630.herokuapp.com//api/quotes",
                "https://arcane-waters-10630.herokuapp.com//api/devices"
            ],
            'img-src': "'self' data:",
            'report-uri': "'localhost'",
            'media-src': "'self'",
            'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://fonts.gstatic.com data:"],
            'data': "'img-src'"
        },

        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {}

    };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
