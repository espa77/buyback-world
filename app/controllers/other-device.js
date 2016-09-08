import Ember from 'ember';

const {
    Controller,
    inject
} = Ember;

export default Controller.extend({
    selectedDevice: inject.service(),

    actions: {
        iPadSelection() {
            this.transitionToRoute("ipad");
        },
        samsungSelection() {
            this.transitionToRoute('samsung');
        }
    }

});
