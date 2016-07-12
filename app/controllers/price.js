import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    userNotSelectedSize: true,

    uniquePrice: Ember.computed('model', 'selected-device', function(){
        let modval = this.get('selectedDevice').device_attributes[0];
        let typeval = this.get('selectedDevice').device_attributes[1];
        let netval = this.get('selectedDevice').device_attributes[2];
        var model = this.get('model');
        var deviceSize = [];
        var filtered = model.filterBy('device_type', modval );
        var filteredTwice = filtered.filterBy('device_model', typeval);
        var filteredThrice = filteredTwice.filterBy('network', netval);
        filteredThrice.forEach(function(size){
            if (!deviceSize.isAny('size', size.get('size'))) {
                deviceSize.pushObject(size);
            }
        });
        return deviceSize;
    }),
    actions: {
        sizeValue(sizeVal) {
            this.get('selectedDevice').addSize(sizeVal);
            this.set('userNotSelectedSize', false);
        }
    }

});
