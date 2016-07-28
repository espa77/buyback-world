import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    uniqueNetwork: Ember.computed('model', 'selectedDevice.device_attributes.model', function(){
        let modval = this.get('selectedDevice.device_attributes.model');
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
        networkValue(networkVal) {
            this.get('selectedDevice').addNetwork(networkVal);
            this.transitionToRoute('price');
        },
        startOver() {
            this.get('selectedDevice').empty();
            this.transitionToRoute('index');
        }
    }
});
