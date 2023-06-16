/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(" ")
    for (let i=0; i < sentence.length; i++) {
        let cur = ""
        for (let j=0; j < sentence[i].length; j++) {
            cur += sentence[i][j]
            if (cur === searchWord) return i + 1
        }
    }
    return -1
};