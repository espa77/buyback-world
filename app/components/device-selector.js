import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        changeGroupValue(val) {
            this.set('groupValue', val);
            this.send('submitDeviceType', val);
        },
        submitDeviceType(val) {
            this.set('device_type', val);
            console.log(val);
        }
    }
});
