import Ember from 'ember';

export default Ember.Component.extend({

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
