import Ember from 'ember';

const {
    Component,
    inject,
    observer,
    get,
    set,
    run
} = Ember;

export default Component.extend({
    selectedDevice: inject.service(),

    tagName: 'section',
    classNames:['main_h', 'sticky'],

    didInsertElement() {
        this._super(...arguments);

        var previousScroll = 0,
            headerOrgOffset = $('.material-design-hamburger').height();

        $('.main_h').height($('.material-design-hamburger').height());

        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();
            if (currentScroll > headerOrgOffset) {
                if (currentScroll > previousScroll) {
                    $('.main_h').removeClass('sticky');
                } else {
                    $('.main_h').addClass('sticky');
                }
            } else {
                $('.main_h').addClass('sticky');
            }
            previousScroll = currentScroll;
        });

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
    willRemoveElement() {
        this._super(...arguments);
        $(window).off('scroll', this._windowScroll);
        this._super(...arguments);
    }
});
