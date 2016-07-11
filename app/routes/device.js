import Ember from 'ember';

export default Ember.Route.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    model() {
        return this.get('store').findAll('device');
    },
    redirect(model, transition) {
        if (this.get('selectedDevice').device_attributes.length === 1) {

            this.transitionTo('device.mod', deviceVal);
        }
    }
});

