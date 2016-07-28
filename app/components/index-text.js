import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
            var tl = new TimelineLite(),
                text = $("#index-text-one-hour"),
                split = new SplitText(text, {type:"chars"}),
                chars = split.chars,
                centerIndex = Math.floor(chars.length / 2),
                i;
            for (i = 0; i < chars.length; i++) {
                tl.from(chars[i], 1, {x:(i - centerIndex) * 60, opacity:0, ease:Power2.easeOut}, i * 0.08);
            }
            return tl;
    }
});
