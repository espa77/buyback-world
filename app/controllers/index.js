import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    userSelectedDevice: Ember.computed('selectedDevice.device', function() {
        return this.get('selectedDevice.device');
    }),

    refresh: Ember.observer('selectedDevice.device_attributes', function() {
        if (this.get('selectedDevice.device_attributes').length === 0) {
            this.set('userSelectedDevice', false);
        }
    }),

    userDeviceChanged: Ember.computed('selectedDevice.device_attributes.length', function(){
        return this.get('selectedDevice.device_attributes.length') === 1;
    }),

    userModelChanged: Ember.computed('selectedDevice.device_attributes.length', function(){
        return this.get('selectedDevice.device_attributes.length') === 2;
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

    uniqueModel: Ember.computed('model', 'userSelectedDevice', function(){
        let val = this.get('userSelectedDevice');
        var model = this.get('model');
        var uniqueModels = [];
        var filteredModels = model.filterBy('device_type', val );
        filteredModels.forEach(function(element){
            if (!uniqueModels.isAny('device_model', element.get('device_model'))) {
                uniqueModels.pushObject(element);
            }
        });
        return uniqueModels;
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
        },
        refreshDevice(deviceVal, modelVal) {
            this.set('userSelectedDevice', null);
            this.get('selectedDevice').removeDevice(deviceVal);
            if (modelVal) {
                this.get('selectedDevice').removeModel(modelVal);
            }
        },
        modelValue(modelVal) {
            this.get('selectedDevice').addModel(modelVal);
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
