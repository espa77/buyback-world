import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('device', function() {
    this.route('mod', function() {
      this.route('network');
    });
  });
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('price');
});

export default Router;
