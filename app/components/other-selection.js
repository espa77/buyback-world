import Ember from 'ember';

const {
    Component,
    inject,
    get
} = Ember;

export default Component.extend({
    selectedDevice: inject.service(),

    didInsertElement(){
        this._super(...arguments);

        TweenLite.set(".selector", {visibility:"visible"});
        let tl = new TimelineMax();

        tl.staggerFromTo('.flex .buttons', 1.2, {
            opacity: 0,
            y:-70,
            rotationX: -210

        }, {
            opacity: 1,
            y:0,
            rotationX:0,
            ease: Back.easeOut.config(1.1)
        },0.2);

    },

    actions: {
        ipad() {
            let deviceVal = "iPad";
            get(this, 'selectedDevice').addDevice(deviceVal);
            this.ipad();
        },
        samsung() {
            let deviceVal = "Galaxy";
            get(this, 'selectedDevice').addDevice(deviceVal);
            this.samsung();
        }
    }

});
