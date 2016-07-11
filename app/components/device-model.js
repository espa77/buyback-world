import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    actions: {
        changeModelValue(modelVal) {
            this.set('groupValue', modelVal);
            this.send(modelVal);
        }
    },
    changeModelValue() {
        throw new Error ("You must select a model to continue");
    }
});
