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

    sizeSelection: Ember.computed('model', 'selectedDevice.device_attributes.device', function(){
        let typeval = this.get('selectedDevice.device_attributes.device'),
            modval = this.get('selectedDevice.device_attributes.model'),
            netval = this.get('selectedDevice.device_attributes.network'),
            dataModel = this.get('model'),
            deviceSize = [];
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

    conditionSelection: [
        {
            name: "normal"
        }, {
            name: "broken"
        }, {
            name: "broken no power"
        }
        ],

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
        return this.get('name');
    }),

    phoneOnQuote: Ember.computed('name-phone', 'phone', function(){
        return this.get('phone');
    }),

    quote: null,

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
            this.set('conditionValSet', false);
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
