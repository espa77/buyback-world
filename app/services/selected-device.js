import Ember from 'ember';

const {
    Service,
    get,
    set
} = Ember;


export default Service.extend({

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
        set(this, 'device_attributes.condition', "normal");
    },
    addDevice(item) {
        set(this, 'device_attributes.device', item);
    },
    removeDevice() {
        set(this, 'device_attributes.device', null);
    },
    addModel(item) {
        set(this, 'device_attributes.model', item);
    },
    removeModel() {
        set(this, 'device_attributes.model', null);
    },
    addNetwork(item) {
        set(this, 'device_attributes.network', item);
    },
    removeNetwork() {
        set(this, 'device_attributes.network', null);
    },
    addSize(item) {
        set(this, 'device_attributes.size', item);
    },
    removeSize() {
        set(this, 'device_attributes.size', null);
    },
    addCondition(item) {
        set(this, 'device_attributes.condition', item);
    },
    removeCondition() {
        set(this, 'device_attributes.condition', null);
    },
    addPrice(item) {
        set(this, 'device_attributes.price', item);
    },
    removePrice() {
        set(this, 'device_attributes.price', null);
    },
    addName(item){
        set(this, 'device_attributes.name', item);
    },
    addPhone(item){
        set(this, 'device_attributes.phone', item);
   },
    show() {
        return get(this, 'device_attributes');
    },
    // changeHamburgerColorToBlue() {
    //     document.getElementsByClassName('material-design-hamburger__layer')[0].style.background = '#00b0ff';
    // },
    // changeHamburgerColorToWhite() {
    //     document.getElementsByClassName('material-design-hamburger__layer')[0].style.background = '#fff';
    // },
    empty() {
        set(this, 'device_attributes.device', null);
        set(this, 'device_attributes.model', null);
        set(this, 'device_attributes.network', null);
        set(this, 'device_attributes.size', null);
        set(this, 'device_attributes.condition', "normal");
        set(this, 'device_attributes.price', null);
        set(this, 'device_attributes.name', null);
        set(this, 'device_attributes.phone', null);
    }
});
