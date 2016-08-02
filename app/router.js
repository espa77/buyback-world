import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('thanks');
  this.route('iphone');
  this.route('ipad');
  this.route('samsung');
  this.route('network');
  this.route('price');
  this.route('thanks');
  this.route('page-not-found', { path: '/*wildcard' });
});


export default Router;
