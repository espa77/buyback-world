import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    conditionValNotSet: true,
    userNotSelectedSize: true,

    finalDevice: Ember.computed('selectedDevice', function() {
        if (this.get('selectedDevice')) {
            let typeval = this.get('selectedDevice.device');
            let modval = this.get('selectedDevice.model');
            let netval = this.get('selectedDevice.network');
            let size = this.get('selectedDevice.size');
                if (size === null) {
                    size = "16";
                }
            let dataModel = this.get('model');
            let filtered = dataModel.filterBy('device_type', typeval)
                .filterBy('device_model', modval)
                .filterBy('network', netval)
                .filterBy('size', size);
            return filtered;
        }
    }),

    userSizes: Ember.observer('selectedDevice.size', function(){
        return this.get('selectedDevice.size');
    }),

    sizeSelection: Ember.computed('model', 'selectedDevice', function(){
        let typeval = this.get('selectedDevice').device;
        let modval = this.get('selectedDevice').model;
        let netval = this.get('selectedDevice').network;
        let dataModel = this.get('model');
        var deviceSize = [];
        let filtered = dataModel.filterBy('device_type', typeval )
            .filterBy('device_model', modval)
            .filterBy('network', netval);
        filtered.forEach(function(size){
            if (!deviceSize.isAny('size', size.get('size'))) {
                deviceSize.pushObject(size);
            }
        });
        return deviceSize;
    }),

    devicePrice: Ember.computed('model', 'selected-device', function(){
        let userDevice = this.get('selectedDevice').device;
        let userModel = this.get('selectedDevice').model;
        let userNetwork = this.get('selectedDevice').network;
        var userSize = this.get('selectedDevice').size;
            if (userSize === null) {
                userSize = "16";
            }
        var model = this.get('model');
        let finalDevice = model.filterBy('device_type', userDevice)
            .filterBy('device_model', userModel)
            .filterBy('network', userNetwork)
            .filterBy('size', parseInt(userSize));
        return finalDevice;
    }),


// can't return a controller function that returns a computed property

    actions: {
        sizeValue(sizeVal) {
            this.get('selectedDevice').addSize(sizeVal);
            this.set('userNotSelectedSize', false);

        },
        conditionValue(conditionVal) {
            this.get('selectedDevice').addCondition(conditionVal);
            this.set('conditionValNotSet', false);
            console.log(conditionVal);
        },
        priceValue(priceVal) {
            console.log(priceVal);
        },
        refreshDeviceFromPrice(deviceVal) {
            this.transitionToRoute('index');
        },
        refreshModelFromPrice(modelVal) {
            this.transitionToRoute('index');
        },
        refreshNetwork(networkVal) {
            this.transitionToRoute('index');
        }
    }

});
