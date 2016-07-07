import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('device');
  this.route('device_type', { path: '/:device_type' });
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
