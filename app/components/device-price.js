import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        changePriceValue(priceVal) {
            this.set('groupValue', priceVal);
            this.send(priceVal);
        }
    },
});
