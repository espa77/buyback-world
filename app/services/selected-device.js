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

    init() {
        this._super(...arguments);
        this.set('device_attributes.condition', "normal");
    },
    addDevice(item) {
        this.set('device_attributes.device', item);
    },
    removeDevice() {
        this.set('device_attributes.device', null);
    },
    addModel(item) {
        this.set('device_attributes.model', item);
    },
    removeModel() {
        this.set('device_attributes.model', null);
    },
    addNetwork(item) {
        this.set('device_attributes.network', item);
    },
    removeNetwork() {
        this.set('device_attributes.network', null);
    },
    addSize(item) {
        this.set('device_attributes.size', item);
    },
    removeSize() {
        this.set('device_attributes.size', null);
    },
    addCondition(item) {
        this.set('device_attributes.condition', item);
    },
    removeCondition() {
        this.set('device_attributes.condition', null);
    },
    addPrice(item) {
        this.set('device_attributes.price', item);
    },
    removePrice() {
        this.set('device_attributes.price', null);
    },
    addName(item){
        this.set('device_attributes.name', item);
    },
    addPhone(item){
       this.set('device_attributes.phone', item);
   },
    show() {
        return this.get('device_attributes');
    },
    empty() {
        this.set('device_attributes.device', null);
        this.set('device_attributes.model', null);
        this.set('device_attributes.network', null);
        this.set('device_attributes.size', null);
        this.set('device_attributes.condition', "normal");
        this.set('device_attributes.price', null);
        this.set('device_attributes.name', null);
        this.set('device_attributes.phone', null);
    }
});
