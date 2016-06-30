import Ember from 'ember';

let devices;
devices = [{
    id: 1,
    title: 'iPhone',
    image: 'http://www.radio.net/inc/v2/images/landing/hero/devices/single/iphone_6.png'
}, {
    id: 2,
    title: 'iPad',
    image: 'http://www.radio.net/inc/v2/images/landing/hero/devices/single/ipad.png'
}, {
    id: 3,
    title: 'Samsung',
    image: 'http://www.techclient.com/wp-content/uploads/Samsung-Galaxy-S6-PSD-Mockup-Template-Custom.png'
}];


export default Ember.Route.extend({
    model() {
        return devices;
    }
});
