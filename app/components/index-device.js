import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device')
});
