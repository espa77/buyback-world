import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    userNotSelectedSize: true,

    uniqueSize: Ember.computed('model', 'selected-device', function(){
        let typeval = this.get('selectedDevice').device_attributes[0];
        let modval = this.get('selectedDevice').device_attributes[1];
        let netval = this.get('selectedDevice').device_attributes[2];
        let model = this.get('model');
        var deviceSize = [];
        let filtered = model.filterBy('device_type', typeval )
            .filterBy('device_model', modval)
            .filterBy('network', netval);
        filtered.forEach(function(size){
            if (!deviceSize.isAny('size', size.get('size'))) {
                deviceSize.pushObject(size);
            }
        });
        return deviceSize;
    }),

    devicePrice: function() {
        Ember.computed('model', 'selected-device', function () {
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
        });
    },

    actions: {
        sizeValue(sizeVal) {
            this.get('selectedDevice').addSize(sizeVal);
            this.set('userNotSelectedSize', false);
            this.devicePrice();
        },
        priceValue(priceVal) {
            console.log(priceVal);
        }
    }

});
