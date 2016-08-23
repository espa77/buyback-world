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
    classNames:['main_h'],
    classNameBindings: ['sticky'],
    sticky: false,
    topPos: 0,
    offset: 70,

    onWindowScroll(e) {
        let scroll = $(e.currentTarget).scrollTop(),
            topPos = (get(this, 'topPos') * -1);
        if (scroll > topPos) {
            set(this, 'sticky', true);
        } else {
            set(this, 'sticky', false);
        }
    },

    modelAdded: observer('selectedDevice.device_attributes.model', function() {
        $(window).off('scroll', this._windowScroll);
        set(this, 'sticky', true);
    }),

    didInsertElement() {
        this._super(...arguments);
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
            }),
        this._windowScroll = run.bind(this, 'onWindowScroll');
        $(window).on('scroll', this._windowScroll);
        set(this, 'topPos', $('.main_h').offset().top);

        $('.mobile-toggle').click(function () {
            if ($('.main_h').hasClass('open-nav')) {
                $('.main_h').removeClass('open-nav');
            } else {
                $('.main_h').addClass('open-nav');
            }
        });

        $('.main_h li a').click(function () {
            if ($('.main_h').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_h').removeClass('open-nav');
            }
        });
    },
    willRemoveElement() {
        this._super(...arguments);
        $(window).off('scroll', this._windowScroll);
        this._super(...arguments);
    }
});
