import Ember from 'ember';

const {
    Component,
    inject,
    get,
} = Ember;

export default Component.extend({
    selectedDevice: inject.service('selected-device'),

    actions: {
        newDevice() {
            let deviceVal = get(this, 'selectedDevice.device');
            var modelVal = get(this, 'selectedDevice.model');
            if (get(this, 'selectedDevice.model')) {
                modelVal = (get(this, 'selectedDevice.model'));
            }
            this.reloadDevice(deviceVal, modelVal);
        },
        newModel() {
            let modelVal = get(this, 'selectedDevice.model');
            this.reloadModel(modelVal);
        },
        goBack() {
            get(this, 'selectedDevice').empty();
            this.reloadIndex();
        }
    }
});



// <div class="user-selection layout-column flex-xs">
//     {{#paper-card as |card|}}
// {{#card.title as |title|}}
// {{#title.text as |text|}}
// {{#text.headline}}You've selected{{/text.headline}}
// {{#text.subhead}}Device: {{selectedDevice.device_attributes.device}}{{/text.subhead}}
// {{#if selectedDevice.device_attributes.model}}
// {{#text.subhead}}Model: {{selectedDevice.device_attributes.model}}{{/text.subhead}}
// {{/if}}
// {{#if selectedDevice.device_attributes.network}}
// {{#text.subhead}}Network: {{selectedDevice.device_attributes.network}}{{/text.subhead}}
// {{/if}}
// {{#if selectedDevice.device_attributes.size}}
// {{#text.subhead}}Size: {{selectedDevice.device_attributes.size}} GB{{/text.subhead}}
// {{/if}}
// {{#text.subhead}}Condition: {{selectedDevice.device_attributes.condition}}{{/text.subhead}}
//
// {{/title.text}}
// {{#title.media size="sm"}}
// <div class="card-media">
//     <img src="assets/images/{{image}}" alt="{{selectedDevice.device_attributes.device}}" title="{{selectedDevice.device}}" />
//     </div>
//     {{/title.media}}
// {{/card.title}}
// {{#card.actions}}
// {{#if selectedDevice.device_attributes.network}}
// {{#paper-button raised=true onClick=(action "goBack")}}Go Back{{/paper-button}}
// {{else}}
// {{#if selectedDevice.device_attributes.device}}
// {{#paper-button raised=true onClick=(action "newDevice")}}Select New Device{{/paper-button}}
// {{/if}}
// {{#if selectedDevice.device_attributes.model}}
// {{#paper-button raised=true onClick=(action "newModel")}}Select New Model{{/paper-button}}
// {{/if}}
// {{/if}}
// {{/card.actions}}
// {{/paper-card}}
// </div>

