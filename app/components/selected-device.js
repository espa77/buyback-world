import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    actions: {
        newDevice() {
            let deviceVal = this.get('selectedDevice.device');
            var modelVal = this.get('selectedDevice.model');
            if (this.get('selectedDevice.model')) {
                var modelVal = (this.get('selectedDevice.model'));
            }
            this.reloadDevice(deviceVal, modelVal);
        },
        newModel() {
            let modelVal = this.get('selectedDevice.model');
            this.reloadModel(modelVal);
        },
        goBack() {
            this.reloadIndex();
        }
    }
});
