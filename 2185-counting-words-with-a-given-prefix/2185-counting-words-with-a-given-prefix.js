/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let res = 0
    for (const word of words) {
        for (let i=0; i < word.length; i++) {
            if (word[i] !== pref[i]) break
            if (i === pref.length-1) res++
        }
    }
    return res
};