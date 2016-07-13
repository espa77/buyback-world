import Ember from 'ember';

export default Ember.Route.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    model() {
        return this.get('store').findAll('device');
    }
});
