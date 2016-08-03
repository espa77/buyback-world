import Ember from 'ember';

const {
    Component,
    inject,
    get,
    set
} = Ember;

export default Component.extend({
    selectedDevice: inject.service('selected-device'),

    name: null,
    phone: null,


  actions: {
  	quoted: function(){
        let userPhone = get(this, 'phone'),
            userName = get(this, 'name'),
            phoneNo = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (userPhone === null || userName === null) {
            alert('you must enter a valid name and phone number');
            return false;
        }
        if (!(userPhone.match(phoneNo))){
            alert("you must enter a valid US phone number");
            return false;
        }
        get(this, 'selectedDevice').addPhone(userPhone);
        get(this, 'selectedDevice').addName(userName);
  		alert('Your device information has been submitted! A representative will contact you shortly to arrange final sale details.');
  		this.sendAction('quoted');
  	}
  }
});