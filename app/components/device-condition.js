import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        changeConditionValue(conditionVal) {
            this.set('groupValue', conditionVal);
            this.send(conditionVal);
        }
    },
    changeConditionValue() {
        throw new Error ("You must select a model to continue");
    }
});
