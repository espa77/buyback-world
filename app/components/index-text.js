import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
            var tl = new TimelineLite(),
                text = $("#index-text-one-hour"),
                split = new SplitText(text, {type:"words"}),
                words = split.words,
                centerIndex = Math.floor(words.length / 2),
                i;
            for (i = 0; i < words.length; i++) {
                tl.from(words[i], 1, {x:(i - centerIndex) * 60, opacity:0, ease:Power2.easeOut}, i * 0.08);
            }
            return tl;
    }
});
