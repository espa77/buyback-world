import Ember from 'ember';

const {
    Component,
    set,
    get
} = Ember;

export default Component.extend({

    willRender() {
        set(this, 'networkImage', {
            'att': 'att-svg.png',
            'sprint': 'sprint-svg.png',
            'tMobile': 'tmobile-svg.png',
            'verizon': 'verizon-svg.png',
            'other': 'wireless-tower-svg.png',
            'unlocked': 'unlocked.png'
        });
    },

    att: function() {
        return get(this, 'network') === 'ATT';
    }.property('network'),

    sprint: function() {
        return get(this, 'network') === 'Sprint';
    }.property('network'),

    tMobile: function() {
        return get(this, 'network') === 'T-Mobile';
    }.property('network'),

    verizon: function() {
        return get(this, 'network') === 'Verizon';
    }.property('network'),

    other: function() {
        return get(this, 'network') === 'Other';
    }.property('network'),

    unlocked: function() {
        return get(this, 'network') === 'Unlocked';
    }.property('network'),
 
    actions: {
        changeNetworkValue(networkVal) {
            set(this, 'groupValue', networkVal);
            this.send(networkVal);
        }
    },
    changeNetworkValue() {
        throw new Error ("You must select a network to continue");
    }
});
