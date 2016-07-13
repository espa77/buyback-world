import Ember from 'ember';

export default Ember.Service.extend({
    device_attributes: null,

    device: null,
    model: null,
    network: null,
    size: null,
    condition: "normal",

    init() {
        this._super(...arguments);
        this.set('device_attributes', []);
    },

    addDevice(item) {
        this.get('device_attributes').pushObject(item);
        let device = this.get('device_attributes');
        this.set('device', device[0]);
    },
    removeDevice(item) {
        this.get('device_attributes').removeObject(item);
        this.set('device', null);
    },
    addModel(item) {
        this.get('device_attributes').pushObject(item);
        let device = this.get('device_attributes');
        this.set('model', device[1]);
    },
    removeModel(item) {
        this.get('device_attributes').removeObject(item);
        this.set('model', null);
    },
    addNetwork(item) {
        this.get('device_attributes').pushObject(item);
        let device = this.get('device_attributes');
        this.set('network', device[2]);
    },
    removeNetwork(item) {
        this.get('device_attributes').removeObject(item);
        this.set('network', null);
    },
    addSize(item) {
        this.get('device_attributes').pushObject(item);
        let device = this.get('device_attributes');
        this.set('size', device[3]);
    },
    removeSize(item) {
        this.get('device_attributes').removeObject(item);
        this.set('size', null);
    },
    addCondition(item) {
        this.get('device_attributes').addObject(item);
        let device = this.get('device_attributes');
        this.set('condition', device[4]);
    },
    removeCondition(item) {
        this.get('device_attributes').removeObject(item);
        this.set('condition', null);
    },
    show() {
        let device = this.get('device_attributes');
        console.log(device);
    },
    empty() {
        this.get('device_attributes').clear();
    }
});
