import Ember from 'ember';

export default Ember.Service.extend({

    device_attributes: null,

    device: null,
    model: null,
    network: null,
    size: null,
    condition: "normal",
    price: null,

    init() {
        this._super(...arguments);
        this.set('device_attributes', []);
    },
    addDevice(item) {
        this.get('device_attributes').pushObject(item);
        this.set('device', item);
    },
    removeDevice(item) {
        this.get('device_attributes').removeObject(item);
        this.set('device', null);
    },
    addModel(item) {
        this.get('device_attributes').pushObject(item);
        this.set('model', item);
    },
    removeModel(item) {
        this.get('device_attributes').removeObject(item);
        this.set('model', null);
    },
    addNetwork(item) {
        this.get('device_attributes').pushObject(item);
        this.set('network', item);
    },
    removeNetwork(item) {
        this.get('device_attributes').removeObject(item);
        this.set('network', null);
    },
    addSize(item) {
        this.get('device_attributes').pushObject(item);
        this.set('size', item);
    },
    removeSize(item) {
        this.get('device_attributes').removeObject(item);
        this.set('size', null);
    },
    addCondition(item) {
        this.set('condition', item);
    },
    removeCondition() {
        this.set('condition', null);
    },
    addPrice(item) {
        this.get('device_attributes').pushObject(item);
        this.set('price', item);
    },
    removePrice(item) {
        this.get('device_attributes').removeObject(item);
        this.set('price', null);
    },
    show() {
        let device = this.get('device_attributes');
        console.log(device);
    },
    empty() {
        this.set('device', null);
        this.set('model', null);
        this.set('network', null);
        this.set('size', null);
        this.set('condition', "normal");
        this.set('price', null);
        this.set('device_attributes', []);
    }
});
