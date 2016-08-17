import Ember from 'ember';

const {
    Component,
    get,
    set
} = Ember;

export default Ember.Component.extend({
	selectedDevice: Ember.inject.service(),
    
    didInsertElement(){
        this._super(...arguments);

        TweenLite.set(".selector", {visibility:"visible"});
        let tl = new TimelineMax();

        tl.staggerFromTo('.flex .buttons', 0.8, {
            opacity: 0,
            y: 60

        }, {
            opacity: 1,
            y:0,
            ease: Back.easeOut.config(2)
        },0.3);

    },
    actions: {
    	iPadSelection() {
            let deviceVal = "iPad";
            get(this, 'selectedDevice').addDevice(deviceVal);
            this.send(deviceVal);
        },
        samsungSelection() {
            let deviceVal = "Galaxy";
            get(this, 'selectedDevice').addDevice(deviceVal);
            this.send(deviceVal);
        }
    }
});
