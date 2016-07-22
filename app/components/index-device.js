import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement(){
        let deviceSelectionTextObject = this.$('#device-selection-text'),
            text = new SplitText(deviceSelectionTextObject, {type: "words"}),
            tl = new TimelineLite(),
            numWords = text.words.length;

        TweenLite.set(deviceSelectionTextObject, {perspective:400});

        for(var i = 0; i < numWords; i++){

            tl.from(text.words[i], 1, {force3D:true, opacity:0, rotationY:-90, transformOrigin:"0% 50%",  ease:Sine.easeOut}, Math.random())
        }},
});
