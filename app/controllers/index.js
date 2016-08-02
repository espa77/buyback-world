import Ember from 'ember';

export default Ember.Controller.extend({

    selectedDevice: Ember.inject.service(),

    userSelectedDevice: Ember.computed('selectedDevice.device_attributes.device', function() {
        return this.get('selectedDevice.device_attributes.device');
    }),

    finalDevice: Ember.computed('userSelectedDevice', function() {
        if (this.get('userSelectedDevice')) {
            return this.get('uniqueDevice').filterBy('device_type', this.get('userSelectedDevice'));
        }
    }),

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
        deviceSelected(deviceVal) {
            let device = deviceVal.toLowerCase();
            if (device === "galaxy") {
                return this.transitionToRoute("samsung");
            }
            this.transitionToRoute(device);
        },
        refreshDevice(deviceVal, modelVal) {
            this.get('selectedDevice').removeDevice(deviceVal);
            if (modelVal) {
                this.get('selectedDevice').removeModel(modelVal);
            }
        },
        refreshModel(modelVal) {
            this.get('selectedDevice').removeModel(modelVal);
        }
    }
});
