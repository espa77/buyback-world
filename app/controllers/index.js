import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    userSelectedDevice: false,
    userSelectedModel: true,
    userSelectedNetwork: true,

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

    uniqueModel: Ember.computed('model', 'selectedDevice', function(){
        let val = this.get('selectedDevice').device_attributes.get('firstObject');
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

    uniqueNetwork: Ember.computed('model', 'selected-device', function(){
        let netval = this.get('selectedDevice').device_attributes.get('lastObject');
        var model = this.get('model');
        var uniqueNetworks = [];
        var filteredNetworks = model.filterBy('device_model', netval );
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
            this.set('userSelectedDevice', true);
            this.set('userSelectedModel', false);
        },
        modelValue(modelVal) {
            this.get('selectedDevice').addModel(modelVal);
            this.set('userSelectedModel', true);
            this.set('userSelectedNetwork', false);
        },
        networkValue(networkVal) {
            this.get('selectedDevice').addNetwork(networkVal);
            this.set('userSelectedNetwork', true);
            this.transitionToRoute('price');
        }
    }
});