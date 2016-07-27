import Ember from 'ember';

export default Ember.Controller.extend({

    selectedDevice: Ember.inject.service('selected-device'),

    refresh: Ember.observer('selectedDevice.device_attributes.device', function() {
        if (this.get('selectedDevice.device_attributes.device') === false) {
            this.set('userSelectedDevice', false);
        }
    }),

    userSelectedDevice: Ember.computed('selectedDevice.device_attributes.device', function() {
        return this.get('selectedDevice.device_attributes.device');
    }),

    userDeviceChanged: Ember.computed('selectedDevice.device_attributes.device', function(){
        return this.get('selectedDevice.device_attributes.device');
    }),

    userSelectedModel: Ember.computed('selectedDevice.device_attributes.model', function(){
        return this.get('selectedDevice.device_attributes.model');
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

    uniqueNetwork: Ember.computed('model', 'selectedDevice.model', function(){
        let modval = this.get('selectedDevice.model');
        var dataModel = this.get('model');
        var uniqueNetworks = [];
        var filteredNetworks = dataModel.filterBy('device_model', modval );
        filteredNetworks.forEach(function(el){
            if (!uniqueNetworks.isAny('network', el.get('network'))) {
                uniqueNetworks.pushObject(el);
            }
        });
        return uniqueNetworks;
    }),

    actions: {
        deviceValue(deviceVal) {
            this.get('selectedDevice').addDevice(deviceVal);
            this.set('userSelectedDevice', deviceVal);
            this.transitionToRoute('mod');
        },
        refreshDevice(deviceVal, modelVal) {
            this.set('userSelectedDevice', null);
            this.get('selectedDevice').removeDevice(deviceVal);
            if (modelVal) {
                this.get('selectedDevice').removeModel(modelVal);
            }
        },
        refreshModel(modelVal) {
            this.get('selectedDevice').removeModel(modelVal);
        },
        networkValue(networkVal) {
            this.get('selectedDevice').addNetwork(networkVal);
            this.transitionToRoute('price');
        }
    }
});
