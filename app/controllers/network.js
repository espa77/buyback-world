import Ember from 'ember';

const {
    Controller,
    inject,
    computed,
    get,
} = Ember;

export default Controller.extend({
    selectedDevice: inject.service(),

    uniqueNetwork: computed('model', 'selectedDevice.device_attributes.model', function(){
        let modval = get(this, 'selectedDevice.device_attributes.model'),
            dataModel = get(this, 'model'),
            uniqueNetworks = [];
        let filteredNetworks = dataModel.filterBy('device_model', modval);
        filteredNetworks.forEach(function(el){
            if (!uniqueNetworks.isAny('network', el.get('network'))) {
                uniqueNetworks.pushObject(el);
            }
        });
        return uniqueNetworks;
    }),
    actions: {
        networkValue(networkVal) {
            get(this, 'selectedDevice').addNetwork(networkVal);
            this.transitionToRoute('price');
        },
        startOver() {
            get(this, 'selectedDevice').empty();
            this.transitionToRoute('index');
        }
    }
});
