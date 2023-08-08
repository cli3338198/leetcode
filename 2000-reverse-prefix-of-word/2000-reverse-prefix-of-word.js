/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    word = word.split("")
    let l = 0
    let r = 0
    while (word[r] !== ch && r in word) r++
    while (l < r && r in word) {
        [word[r], word[l]] = [word[l], word[r]]
        l++
        r--
    }
    return word.join("")
};