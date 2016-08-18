import Ember from 'ember';

const {
    Controller,
    inject,
    get
} = Ember;

export default Controller.extend({
    selectedDevice: inject.service(),

    actions: {
        iPadSelection() {
            let deviceVal = "iPad";
            get(this, 'selectedDevice').addDevice(deviceVal);
            this.transitionToRoute("ipad");
        },
        samsungSelection() {
            let deviceVal = "Galaxy";
            get(this, 'selectedDevice').addDevice(deviceVal);
            this.transitionToRoute('samsung');
        }
    }

});
