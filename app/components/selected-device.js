import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device'),



    actions: {
        newDevice() {
            let deviceVal = this.get('selectedDevice.device');
            this.get('selectedDevice').removeDevice(deviceVal);
            this.reloadDevice(deviceVal);
        },
        newModel() {
            let modelVal = this.get('selectedDevice.model');
            this.get('selectedDevice').removeModel(modelVal);
            this.reloadModel(modelVal);
        },
        newNetwork() {
            let networkVal = this.get('selectedDevice.network');
            this.get('selectedDevice').removeNetwork(networkVal);
            this.reloadNetwork(networkVal);
        }
    }
});
