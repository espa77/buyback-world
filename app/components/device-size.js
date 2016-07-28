import Ember from 'ember';

export default Ember.Component.extend({
    attributeBindings: ['name'],
    name: 'size',

    actions: {
        changeSizeValue(sizeVal) {
            this.set('groupValue', sizeVal);
            this.send(sizeVal);
        }
    },
    changeSizeValue() {
        throw new Error ("You must select a size to continue");
    }
});
