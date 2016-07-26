import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement(){
        this._super(...arguments);

        TweenLite.set(".selector", {visibility:"visible"});
        let tl = new TimelineMax(),
            objs = $('.selector > div').toArray();

        tl.staggerFromTo(objs, 0.5, {
            opacity: 0,
            cycle: {y: [0, 50, 0], x: [-50, 0, 50]},
        }, {
            opacity: 1,
            y:0,
            x: 0,
            ease: Back.easeOut.config(2)
        },0.2);
    },
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
