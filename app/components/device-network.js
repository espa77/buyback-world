import Ember from 'ember';

export default Ember.Component.extend({

    willRender() {
        this.set('networkImage', {
            'att': 'att-svg.png',
            'sprint': 'sprint-svg.png',
            'tMobile': 'tmobile-svg.png',
            'verizon': 'verizon-svg.png',
            'other': 'wireless-tower-svg.png'
        });
    },

    att: function() {
        return this.get('network') === 'ATT';
    }.property('network'),

    sprint: function() {
        return this.get('network') === 'Sprint';
    }.property('network'),

    tMobile: function() {
        return this.get('network') === 'T-Mobile';
    }.property('network'),

    verizon: function() {
        return this.get('network') === 'Verizon';
    }.property('network'),

    other: function() {
        return this.get('network') === 'Other';
    }.property('network'),
 
    actions: {
        changeNetworkValue(networkVal) {
            this.set('groupValue', networkVal);
            this.send(networkVal);
        }
    },
    changeNetworkValue() {
        throw new Error ("You must select a network to continue");
    }
});
