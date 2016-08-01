import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'header',
    classNames:['main_h'],
    classNameBindings: ['sticky'],
    sticky: false,
    topPos: 100,
    offset: 70,

    selectedDevice: Ember.inject.service('selected-device'),

    onWindowScroll(e) {
        let scroll = $(e.currentTarget).scrollTop(),
            topPos = this.get('topPos');
        if (scroll > topPos) {
            this.set('sticky', true);
        } else {
            this.set('sticky', false);
        }

    },

    didInsertElement() {
        this._super(...arguments);
        this._windowScroll = Ember.run.bind(this, 'onWindowScroll');
        $(window).on('scroll', this._windowScroll);
        this.set('topPos', this.$('.main_h').offset().top);
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
