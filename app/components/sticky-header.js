import Ember from 'ember';

const {
    Component,
    inject,
    get,
    set
} = Ember;

export default Component.extend({
    selectedDevice: inject.service('selected-device'),
    tagName: 'section',

    didInsertElement() {
        this.super(...arguments);
        document.querySelector('.material-design-hamburger__icon').addEventListener(
            'click',
            function () {
                var child;

                document.body.classList.toggle('background--blur');
                this.parentNode.nextElementSibling.classList.toggle('menu--on');

                child = this.childNodes[1].classList;

                if (child.contains('material-design-hamburger__icon--to-arrow')) {
                    child.remove('material-design-hamburger__icon--to-arrow');
                    child.add('material-design-hamburger__icon--from-arrow');
                } else {
                    child.remove('material-design-hamburger__icon--from-arrow');
                    child.add('material-design-hamburger__icon--to-arrow');
                }

            });
    },
    actions: {
        iPhoneSelection() {
            let deviceVal = "iPhone";
            get(this, 'selectedDevice').addDevice(deviceVal);

        }
    }


});
