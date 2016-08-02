import Ember from 'ember';

export default Ember.Component.extend({
    selectedDevice: Ember.inject.service(),

    tagName: 'header',
    classNames:['main_h'],
    classNameBindings: ['sticky'],
    sticky: false,
    topPos: 0,
    offset: 70,

    onWindowScroll(e) {
        let scroll = $(e.currentTarget).scrollTop(),
            topPos = (this.get('topPos') * -1);
        if (scroll > topPos) {
            this.set('sticky', true);
        } else {
            this.set('sticky', false);
        }
    },

    modelAdded: Ember.observer('selectedDevice.device_attributes.model', function() {
        $(window).off('scroll', this._windowScroll);
        this.set('sticky', true);
    }),

    didInsertElement() {
        this._super(...arguments);
        this._windowScroll = Ember.run.bind(this, 'onWindowScroll');
        $(window).on('scroll', this._windowScroll);
        this.set('topPos', $('.main_h').offset().top);

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
        $(window).off('scroll', this._windowScroll);
        this._super(...arguments);
    },
    actions: {
        scrollToSell() {
            let target = $('.sec01').offset().top - (this.get('offset'));
            $('html, body').animate({
                scrollTop: target
            }, 500);
        },
        scrollToSimple() {
            let target = $('.sec02').offset().top - (this.get('offset'));
            $('html, body').animate({
                scrollTop: target
            }, 500);
        },
        scrollToAbout() {
            let target = $('.sec03').offset().top - (this.get('offset'));
            $('html, body').animate({
                scrollTop: target
            }, 500);
        },
        scrollToContact() {
            let target = $('.sec04').offset().top - (this.get('offset'));
            $('html, body').animate({
                scrollTop: target
            }, 500);
        },
    }
});
