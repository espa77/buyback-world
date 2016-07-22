import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    conditionValNotSet: true,
    userNotSelectedSize: true,

    finalDevice: Ember.computed('sizeSelection', 'selectedDevice', function() {
        if (this.get('selectedDevice')) {
            let typeval = this.get('selectedDevice.device');
            let modval = this.get('selectedDevice.model');
            let netval = this.get('selectedDevice.network');
            let dataModel = this.get('model');
            let size = this.get('sizeSelection.firstObject.size');
            this.set('selectedDevice.size', size);
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

    devicePrice: Ember.computed('model', 'selectedDevice.condition', 'selectedDevice', function(){
        let userDevice = this.get('selectedDevice.device');
        let userModel = this.get('selectedDevice.model');
        let userNetwork = this.get('selectedDevice.network');
        var userSize = this.get('selectedDevice.size');
        let userCondition = this.get('selectedDevice.condition');
        if (userSize === null) {
                userSize = this.get('sizeSelection.firstObject.size');
                this.set('selectedDevice.size', userSize);
            }
        var model = this.get('model');
        let finalDevice = model.filterBy('device_type', userDevice)
            .filterBy('device_model', userModel)
            .filterBy('network', userNetwork)
            .filterBy('size', userSize);
        let price = finalDevice[0].get('price_cents');
        if (userCondition === "normal") {
            this.set('finalDevice.firstObject.price_cents', price / 100);
        }
        if (userCondition === "broken") {
            this.set('finalDevice.firstObject.price_cents', price / 2);
        }
        if (userCondition === "broken no power") {
            this.set('finalDevice.firstObject.price_cents', price / 4);
        }
        return finalDevice;
    }),

    actions: {
        sizeValue(sizeVal) {
            this.get('selectedDevice').addSize(sizeVal);
            this.set('userNotSelectedSize', false);

        },
        conditionValue(conditionVal) {
            this.get('selectedDevice').addCondition(conditionVal);
            this.set('conditionValNotSet', false);
        },
        priceValue(priceVal) {
            console.log(priceVal);
        },

        startOver() {
            this.set('conditionValNotSet', true);
            this.set('userNotSelectedSize', true);
            this.transitionToRoute('index');
            this.get('selectedDevice').empty();
        }
    }

});
