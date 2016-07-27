import Ember from 'ember';

export default Ember.Service.extend({

    device_attributes: {
        device: null,
        model: null,
        network: null,
        size: null,
        condition: null,
        price: null,
        name: null,
        phone: null,
    },

    device: null,
    model: null,
    network: null,
    size: null,
    condition: null,
    price: null,
    name: null,
    phone: null,

    init() {
        this._super(...arguments);
        this.set('condition', "normal");
        this.set('device_attributes.condition', "normal");
    },
    addDevice(item) {
        this.set('device_attributes.device', item);
        this.set('device', item);
    },
    removeDevice() {
        this.set('device_attributes.device', null);
        this.set('device', null);
    },
    addModel(item) {
        this.set('device_attributes.model', item);
        this.set('model', item);
    },
    removeModel(item) {
        this.set('device_attributes.model', null);
        this.set('model', null);
    },
    addNetwork(item) {
        this.set('device_attributes.network', item);
        this.set('network', item);
    },
    removeNetwork(item) {
        this.set('device_attributes.network', null);
        this.set('network', null);
    },
    addSize(item) {
        this.set('device_attributes.size', item);
        this.set('size', item);
    },
    removeSize(item) {
        this.set('device_attributes.size', null);
        this.set('size', null);
    },
    addCondition(item) {
        this.set('device_attributes.condition', item);
        this.set('condition', item);
    },
    removeCondition(item) {
        this.set('device_attributes.condition', null);
        this.set('condition', null);
    },
    addPrice(item) {
        this.set('device_attributes.price', item);
        this.set('price', item);
    },
    removePrice(item) {
        this.set('device_attributes.price', null);
        this.set('price', null);
    },
    addName(item){
        this.set('device_attributes.name', item);
        this.set('name', item);
    },
    addPhone(item){
       this.set('device_attributes.phone', item);
       this.set('phone', item);
   },
    show() {
        return this.get('device_attributes');
    },
    empty() {
        this.set('device', null);
        this.set('model', null);
        this.set('network', null);
        this.set('size', null);
        this.set('condition', null);
        this.set('price', null);
        this.set('name', null);
        this.set('phone', null);
    }
});
