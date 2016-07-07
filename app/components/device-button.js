import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		click() {
			this.sendAction('action', name, phone);
		},
		targetButton(){
			alert("Thanks for selling your device! Someone will be calling at the phone number you provided shortly to get you PAID!");
		}
	}
});
