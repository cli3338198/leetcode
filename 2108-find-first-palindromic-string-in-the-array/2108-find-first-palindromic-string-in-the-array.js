/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const word of words) {
        if (isPal(word)) return word
    }
    return ''
};

function isPal(word) {
    let l = 0
    let r = word.length-1
    while (l < r) {
        if (word[l] !== word[r]) return false
        l++
        r--
    }
    return true
}