import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        changeGroupValue(val) {
            this.set('groupValue', val);
            this.send('groupValue', val);
        },
        groupValue(val) {
            console.log(val);
        }
    },
    groupValue() {
        throw new Error ("You must select a device to continue")
    }
});
