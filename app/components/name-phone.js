import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    name: null,
    phone: null,


  actions: {
  	quoted: function(phone, name){
        let userPhone = this.get('phone'),
            userName = this.get('name');
        this.get('selectedDevice').addPhone(userPhone);
        this.get('selectedDevice').addName(userName);
  		alert('Your device information has been submitted! A representative will contact you shortly to arrange final sale details.');
  		this.sendAction('quoted');
  	}
  }
});