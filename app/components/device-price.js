import Ember from 'ember';
import EmberValidator from 'ember-validator';

export default Ember.Component.extend(EmberValidator, {
	phoneValidation: [{
		'attr': 'custom',
		'message': 'Please provide a valid phone number.',
		'isError': function(inputValue) {
			var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
				return !phonePattern.test(inputValue);
			}
		}],

	actions: {
		createEmail: function() {
			var name = this.get('name');
			var phone = this.get('phone');
			var seller = this.store.createRecord('seller', {
				name: name,
				phone: phone
			});

			seller.sendEmail();
		},


		submitNameAndPhone(name, phone){
			this.set('name', name);
			this.set('phone', phone);
			this.send('submit');
		}
	} 
});
