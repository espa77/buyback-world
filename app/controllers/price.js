import Ember from 'ember';

const {
    Controller,
    inject,
    computed,
    get,
    set
} = Ember;

export default Controller.extend({
    selectedDevice: inject.service(),

    quote: null,

    conditionSelection: [
        {
            name: "normal"
        }, {
            name: "broken"
        }, {
            name: "broken no power"
        }
    ],

    finalDevice: computed('sizeSelection', 'selectedDevice.device_attributes', function() {
        if (get(this, 'selectedDevice.device_attributes.device')) {
            let typeval = get(this, 'selectedDevice.device_attributes.device'),
                modval = get(this, 'selectedDevice.device_attributes.model'),
                netval = get(this, 'selectedDevice.device_attributes.network'),
                dataModel = get(this, 'model'),
                size = get(this, 'sizeSelection.firstObject.size');
            set(this, 'selectedDevice.device_attributes.size', size);
            let filtered = dataModel.filterBy('device_type', typeval)
                .filterBy('device_model', modval)
                .filterBy('network', netval)
                .filterBy('size', size);
            return filtered;
        }
    }),

    sizeSelection: computed('model', 'selectedDevice.device_attributes.device', function(){
        let typeval = get(this, 'selectedDevice.device_attributes.device'),
            modval = get(this, 'selectedDevice.device_attributes.model'),
            netval = get(this, 'selectedDevice.device_attributes.network'),
            dataModel = get(this, 'model'),
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

    devicePrice: computed('model', 'selectedDevice.device_attributes.condition', 'selectedDevice.device_attributes.size', function(){
        let userDevice = get(this, 'selectedDevice.device_attributes.device'),
            userModel = get(this, 'selectedDevice.device_attributes.model'),
            userNetwork = get(this, 'selectedDevice.device_attributes.network'),
            userSize = get(this, 'selectedDevice.device_attributes.size'),
            userCondition = get(this, 'selectedDevice.device_attributes.condition');
        if (userSize === null) {
                userSize = get(this, 'sizeSelection.firstObject.size');
                set(this, 'selectedDevice.device_attributes.size', userSize);
            }
        var model = get(this, 'model');
        let finalDevice = model.filterBy('device_type', userDevice)
            .filterBy('device_model', userModel)
            .filterBy('network', userNetwork)
            .filterBy('size', userSize),
            price = finalDevice[0].get('price_cents');
        if (userCondition === "normal") {
            get(this, 'selectedDevice').addPrice(price);        }
        if (userCondition === "broken") {
            get(this, 'selectedDevice').addPrice(price/2);        }
        if (userCondition === "broken no power") {
            get(this, 'selectedDevice').addPrice(price/4);        }
        return finalDevice;
    }),

    nameOnQuote: computed('name-phone', 'name', function(){
        return get(this, 'name');
    }),

    phoneOnQuote: computed('name-phone', 'phone', function(){
        return get(this, 'phone');
    }),

    actions: {
        sizeValue(sizeVal) {
            get(this, 'selectedDevice').addSize(sizeVal);
        },
        conditionValue(conditionVal) {
            get(this, 'selectedDevice').addCondition(conditionVal);
        },
        startOver() {
            this.transitionToRoute('index');
        },
        quoted(){
            let finalDevice = get(this, 'selectedDevice.device_attributes'),
                quote = this.store.createRecord('quote', finalDevice);
            quote.save().then(()=> {
                get(this, 'selectedDevice').empty();
                this.transitionToRoute('thanks');
                }).catch(()=> {
                alert("couldn't save quote.");
            });
        },
    }
});
