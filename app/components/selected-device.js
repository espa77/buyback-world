import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    actions: {
        newDevice() {
            let item = selectedDevice.device;
            this.get('selectedDevice').removeDevice(item);
            this.send(function(uniqueDevice){
                console.log('removed device');
            });
        },
        newModel() {
            let item = selectedDevice.model;
            this.get('selectedDevice').removeModel(item);
            this.send(function(uniqueModel){
                console.log('removed model');
            });
        },
        newNetwork() {
            let item = selectedDevice.network;
            this.get('selectedDevice').removeNetwork(item);
            this.send(function(uniqueNetwork){
                console.log('removed network');
            });

        }

    }
});
