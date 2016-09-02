import Ember from 'ember';

const {
    Component,
    get,
} = Ember;

export default Component.extend({
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
        iPhoneSelection() {
            let deviceVal = "iPhone";
            get(this, 'selectedDevice').addDevice(deviceVal);
            this.send(deviceVal);
        },
        transition() {
            let deviceVal = "other";
            this.send(deviceVal);
        }
    }

});


// {{#unless userSelectedDevice}}
// <div class="device-type selector">
//     {{#each uniqueDevice as |device|}}
// {{device-selector send=(action 'deviceValue') id=device.id device_type=device.device_type image=device.image}}
// {{/each}}
// </div>
// <hr>
// {{/unless}}

// <div class="device" id={{device_type}}>
// {{#paper-radio-group groupValue=groupValue onChange=(action 'changeDeviceValue') as |group|}}
// {{#group.paper-radio value=device_type}}
// <div data-id={{id}} class="device_images">
//     <img src="assets/images/{{image}}" class="img_device" />
//     </div>
//     <div class="device_title">
//     {{device_type}}
// </div>
// {{/group.paper-radio}}
// {{/paper-radio-group}}
// </div>

// actions
// changeDeviceValue(deviceVal) {
//     this.set('groupValue', deviceVal);
//     this.send(deviceVal);
// }
// },
// changeDeviceValue() {
//     throw new Error ("You must select a device to continue");
// }