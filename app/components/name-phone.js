import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    name: null,
    phone: null,


  actions: {
  	quoted: function(){
        let userPhone = this.get('phone'),
            userName = this.get('name'),
            phoneNo = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (!(userPhone.match(phoneNo))){
            alert("you must enter a valid US phone number");
            return false;
        }
        if (userPhone === null || userName === null) {
            alert('you must enter a valid name and phone number');
            return false;
        }
        this.get('selectedDevice').addPhone(userPhone);
        this.get('selectedDevice').addName(userName);
  		alert('Your device information has been submitted! A representative will contact you shortly to arrange final sale details.');
  		this.sendAction('quoted');
  	}
  }
});