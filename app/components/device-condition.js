import Ember from 'ember';

const {
    Component,
    inject,
} = Ember;

export default Component.extend({
    selectedDevice: inject.service(),

    classNameBindings: ['layout'],
    layout: 'flex layout-row'

});
