import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),
    
    userSelectedNetwork: false,
    
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
        networkValue(networkVal) {
            this.get('selectedDevice').addNetwork(networkVal);
            this.set('userSelectedNetwork', true);
            this.transitionToRoute('price');
        }
    }
});
