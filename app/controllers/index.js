import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    userSelectedDevice: false,
    userSelectedModel: true,
    userSelectedNetwork: true,

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

    uniqueNetwork: Ember.computed('model', 'userSelectedModel', function(){
        let modval = this.get('userSelectedModel');
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
            this.set('userSelectedModel', false);
        },
        refreshDevice(deviceVal) {
            this.set('userSelectedDevice', false);
            this.get('selectedDevice').removeDevice(deviceVal);
            this.set('userSelectedModel', true);
            this.set('userSelectedNetwork', true);
        },
        modelValue(modelVal) {
            this.get('selectedDevice').addModel(modelVal);
            this.set('userSelectedModel', modelVal);
            this.set('userSelectedNetwork', false);
        },
        refreshModel(modelVal) {
            this.set('userSelectedModel', false);
            this.get('selectedDevice').removeModel(modelVal);
            this.set('userSelectedNetwork', true);
        },
        networkValue(networkVal) {
            this.get('selectedDevice').addNetwork(networkVal);
            this.set('userSelectedNetwork', networkVal);
            this.transitionToRoute('price');
        }
    }
});
