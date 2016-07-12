import Ember from 'ember';

export default Ember.Component.extend({
    
    actions: {
        changeDeviceValue(deviceVal) {
            this.set('groupValue', deviceVal);
            this.send(deviceVal);
        }
    },
    changeDeviceValue() {
        throw new Error ("You must select a device to continue");
    }
});
