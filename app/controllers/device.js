import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    userSelectedDevice: false,

    uniqueDevice: Ember.computed('model', function () {
        var model = this.get('model');
        var uniqueObjects = [];
        model.forEach(function (item) {
            if (!uniqueObjects.isAny('device_type', item.get('device_type'))) {
                uniqueObjects.pushObject(item);
            }
        });
        return uniqueObjects;
    }),

    actions: {
        deviceValue(deviceVal) {
            this.get('selectedDevice').addDevice(deviceVal);
            this.set('userSelectedDevice', true);
            this.transitionToRoute('device.mod');
        }
    }
});