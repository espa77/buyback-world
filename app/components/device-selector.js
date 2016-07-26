import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement(){
        this._super(...arguments);

        TweenLite.set(".selector", {visibility:"visible"});
        let tl = new TimelineMax();

        tl.staggerFromTo('.selector > div', 0.4, {
            opacity: 0,
            y: 40

        }, {
            opacity: 1,
            y:0,
            ease: Back.easeOut.config(2)
        },0.3);

        // objs.forEach(element => {
        //     tl.fromTo(
        //         element,
        //         1.5,
        //         {transform: 'translateY(200px)'},
        //         {transform: 'translateY(0px)'},
        //         '-=.25'
        //     );
        // });

    },


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
