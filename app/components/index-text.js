import Ember from 'ember';

const {
    Component
} = Ember;

export default Component.extend({


    // didInsertElement() {
    //     var tl = new TimelineLite(),
    //         textOne = $("#instant-quote"),
    //         textTwo = $("#free-pickup"),
    //         textThree = $("#same-day-payment"),
    //         splitOne = new SplitText(textOne, {type: "chars"}),
    //         splitTwo = new SplitText(textTwo, {type: "chars"}),
    //         splitThree = new SplitText(textThree, {type: "chars"}),
    //         charsOne = splitOne.chars,
    //         charsTwo = splitTwo.chars,
    //         charsThree = splitThree.chars,
    //         centerIndexOne = Math.floor(charsOne.length / 2),
    //         centerIndexTwo = Math.floor(charsTwo.length / 2),
    //         centerIndexThree = Math.floor(charsThree.length / 2),
    //         i;
    //     for (i = 0; i < charsOne.length; i++) {
    //         tl.from(charsOne[i], 1, {
    //             x: (i - centerIndexOne) * 20,
    //             opacity: 0,
    //             ease: Power2.easeOut
    //         }, i * 0.05);
    //     }
    //     for (i = 0; i < charsTwo.length; i++) {
    //         tl.from(charsTwo[i], 1, {
    //             x: (i - centerIndexTwo) * 30,
    //             opacity: 0,
    //             ease: Power2.easeOut
    //         }, i * 0.07, 0.05);
    //     }
    //     for (i = 0; i < charsThree.length; i++) {
    //         tl.from(charsThree[i], 1, {
    //             x: (i - centerIndexThree) * 40,
    //             opacity: 0,
    //             ease: Power2.easeOut
    //         }, i * 0.10, 0.12);
    //     }
    // }
});
