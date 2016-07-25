import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
  	changeNameValue(nameVal) {
  		this.set('name', nameVal);
  		this.send(nameVal);
  	},

  	changePhoneValue(phoneVal){
  		this.set('phone', phoneVal);
  		this.send(phoneVal);
  	},
  	quoted: function(){
  		alert('Your device information has been submitted! A representative will contact you shortly to arrange final sale details.');
  		this.sendAction('quoted');
  	}
  }
});