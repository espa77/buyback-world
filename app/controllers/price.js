import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),
    // ajax: Ember.inject.service(),

    conditionValSet: false,

    finalDevice: Ember.computed('sizeSelection', 'selectedDevice.device_attributes', function() {
        if (this.get('selectedDevice.device_attributes.device')) {
            let typeval = this.get('selectedDevice.device_attributes.device'),
                modval = this.get('selectedDevice.device_attributes.model'),
                netval = this.get('selectedDevice.device_attributes.network'),
                dataModel = this.get('model'),
                size = this.get('sizeSelection.firstObject.size');
            this.set('selectedDevice.device_attributes.size', size);
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

    sizeSelection: Ember.computed('model', 'selectedDevice.device_attributes', function(){
        let typeval = this.get('selectedDevice.device_attributes').device;
        let modval = this.get('selectedDevice.device_attributes').model;
        let netval = this.get('selectedDevice.device_attributes').network;
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

    devicePrice: Ember.computed('model', 'selectedDevice.device_attributes.condition', 'selectedDevice.device_attributes.size', function(){
        let userDevice = this.get('selectedDevice.device_attributes.device'),
            userModel = this.get('selectedDevice.device_attributes.model'),
            userNetwork = this.get('selectedDevice.device_attributes.network'),
            userSize = this.get('selectedDevice.device_attributes.size'),
            userCondition = this.get('selectedDevice.device_attributes.condition');
        if (userSize === null) {
                userSize = this.get('sizeSelection.firstObject.size');
                this.set('selectedDevice.device_attributes.size', userSize);
            }
        var model = this.get('model');
        let finalDevice = model.filterBy('device_type', userDevice)
            .filterBy('device_model', userModel)
            .filterBy('network', userNetwork)
            .filterBy('size', userSize),
            price = finalDevice[0].get('price_cents');
        if (userCondition === "normal") {
            this.get('selectedDevice').addPrice(price);        }
        if (userCondition === "broken") {
            this.get('selectedDevice').addPrice(price/2);        }
        if (userCondition === "broken no power") {
            this.get('selectedDevice').addPrice(price/4);        }
        return finalDevice;
    }),

    nameOnQuote: Ember.computed('name-phone', 'name', function(){
        let name = this.get('name');
    }),

    phoneOnQuote: Ember.computed('name-phone', 'phone', function(){
        let phone = this.get('phone');
    }),

    quote: Ember.computed('finalDevice.{device,model,network,size,price}', 'nameOnQuote.{name}', 'phoneOnQuote.{phone}', function(){
        let device = this.get('finalDevice.device');
        let model = this.get('finalDevice.device');
        let network = this.get('finalDevice.network');
        let size = this.get('finalDevice.size');
        let price = this.get('finalDevice.price');
        let name = this.get('nameOnQuote.name');
        let phone = this.get('nameOnQuote.phone');
    }),

    actions: {
        sizeValue(sizeVal) {
            this.get('selectedDevice').addSize(sizeVal);
        },
        conditionValue(conditionVal) {
            this.get('selectedDevice').addCondition(conditionVal);
            this.set('conditionValSet', true);
        },
        resetCondition(conditionVal) {
            this.get('selectedDevice').addCondition(conditionVal);
        },
        startOver() {
            this.set('conditionValNotSet', true);
            this.set('userNotSelectedSize', true);
            this.get('selectedDevice').empty();
            this.transitionToRoute('index');
        },

        quoted(){
            if (this.get('selectedDevice.device_attributes.size') === null) {
                this.set('selectedDevice.device_attributes.size', 16);
            }
            let finalDevice = this.get('selectedDevice.device_attributes');
            var quote = this.store.createRecord('quote', finalDevice);
            quote.save().then(()=> {
                this.transitionTo('thanks');
                }).catch(()=> {
                alert("couldn't save quote.");
            });
        },
    }
});
