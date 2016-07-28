import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device'),

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
            var deviceVal = "iPhone";
            this.set('selectedDevice.device_attributes.device', deviceVal);
            this.send(deviceVal);
        },
        iPadSelection() {
            var deviceVal = "iPad";
            this.set('selectedDevice.device_attributes.device', deviceVal);
            this.send(deviceVal);
        },
        samsungSelection() {
            var deviceVal = "Galaxy";
            this.set('selectedDevice.device_attributes.device', deviceVal);
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