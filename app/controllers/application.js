import Ember from 'ember';

const {
    Controller,
    set
} = Ember;

export default Controller.extend({
    makeSticky: false,

    stickHeader() {
        set(this, 'makeSticky', true);
    }
});