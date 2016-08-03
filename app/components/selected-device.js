import Ember from 'ember';

const {
    Component,
    inject,
    get,
    set
} = Ember;

export default Component.extend({
    selectedDevice: inject.service('selected-device'),

    actions: {
        newDevice() {
            let deviceVal = get(this, 'selectedDevice.device');
            var modelVal = get(this, 'selectedDevice.model');
            if (get(this, 'selectedDevice.model')) {
                modelVal = (get(this, 'selectedDevice.model'));
            }
            this.reloadDevice(deviceVal, modelVal);
        },
        newModel() {
            let modelVal = get(this, 'selectedDevice.model');
            this.reloadModel(modelVal);
        },
        goBack() {
            get(this, 'selectedDevice').empty();
            this.reloadIndex();
        }
    }
});
