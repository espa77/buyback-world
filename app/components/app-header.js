import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let titleObject = this.$('#header-title');
        let titleSplitText = new SplitText(titleObject, {type: "chars"});

        let tl = new TimelineMax(),
            chars = shuffle(titleSplitText.chars),
            duration = 6,
            stagger = duration / chars.length;

        tl.set('body', { perspective: 1000, transformStyle: 'preserve-3d' });

        $.each($(chars), function(i, el) {
            tl.set($(this), {
                opacity: 0,
                z: '+=' + getRandom(200, 2000),
                transformOrigin: '50% 50%',
                ease: SlowMo.easeIn
            });
        });

        tl.staggerTo(chars, stagger/4, { opacity: 1 }, 0.05, 'start')
            .staggerTo(chars, stagger*0.65, { z: 0 }, 0.05, 'start')
            .staggerTo(chars, 2, {}, 0, 'pause');


        /* Utils */

        function shuffle(chars) {
            chars.sort(function() {
                return .5 - Math.random();
            });
            return chars;
        }

        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }

    }
});
