import Ember from 'ember';

export default Ember.Service.extend({
    device_attributes: null,

    init() {
        this._super(...arguments);
        this.set('device_attributes', []);
    },

    addDevice(item) {
        this.get('device_attributes').pushObject(item);
    },

    removeDevice(item) {
        this.get('device_attributes').removeObject(item);
    },

    addModel(item) {
        this.get('device_attributes').pushObject(item);
    },

    removeModel(item) {
        this.get('device_attributes').removeObject(item);
    },

    addNetwork(item) {
        this.get('device_attributes').pushObject(item);
    },

    removeNetwork(item) {
        this.get('device_attributes').removeObject(item);
    },
    show() {
        let device = this.get('device_attributes');
        console.log(device);

    },
    empty() {
        this.get('device_attributes').clear();
    }
});
