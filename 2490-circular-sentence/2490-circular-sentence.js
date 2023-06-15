/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    sentence = sentence.split(" ")
    if (sentence.length === 1) {
        return sentence[0].at(0) === sentence[0].at(-1)
    } else {
        for (let i=0; i < sentence.length; i++) {
            if (i === sentence.length-1) return sentence[i].at(-1) === sentence[0].at(0)
            if (sentence[i].at(-1) !== sentence[i+1].at(0)) return false
        }
    }
};