import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('devices');
	this.route('device', { path: '/devices/:device_id'});
  this.route('brands');
	this.route('brand', { path: '/brands/:brand_id'});  	

});

export default Router;
