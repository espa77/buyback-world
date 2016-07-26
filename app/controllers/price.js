import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),
    // ajax: Ember.inject.service(),

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
        this.get('selectedDevice').addPrice(price);
        return finalDevice;
    }),

    nameOnQuote: Ember.computed('name-phone', 'name', function(){
        let name = this.get('name');
    }),

    phoneOnQuote: Ember.computed('name-phone', 'phone', function(){
        let phone = this.get('phone');
    }),

    quote: Ember.computed('finalDevice.{device_type,device_model,network,size,price_cents}', 'nameOnQuote.{name}', 'phoneOnQuote.{phone}', function(){
        let device = this.get('finalDevice.device_type');
        let model = this.get('finalDevice.device_model');
        let network = this.get('finalDevice.network');
        let size = this.get('finalDevice.size');
        let price_cents = this.get('finalDevice.price_cents');
        let name = this.get('nameOnQuote.name');
        let phone = this.get('nameOnQuote.phone');
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
        },

        quoted(){
            if (this.get('selectedDevice.device_attributes.size') === null) {
                this.set('selectedDevice.device_attributes.size', 16);
            }
            let finalDevice = this.get('selectedDevice.device_attributes'),
                quote = this.store.createRecord('quote', finalDevice);

            quote.save().then(()=> {
                this.transitionTo('thanks');
                }).catch(()=> {
                alert("couldn't save quote.");
            });
        },
        // quoted(){
        //     return this.get('ajax').request('/quote', {
        //         method: 'POST',
        //         data:{
        //             device: "this.get('selectedDevice.device')",
        //             model: "this.get('selectedDevice.model')",
        //             network: "this.get('selectedDevice.network')",
        //             size: "this.get('selectedDevice.size')",
        //             condition: "this.get('selectedDevice.condition')",
        //             price: "this.get('selectedDevice.price_cents')",
        //             name: "this.get('selectedDevice.name')",
        //             phone: "this.get('selectedDevice.phone')"
        //         }
        //     });
        // }
    }
});
