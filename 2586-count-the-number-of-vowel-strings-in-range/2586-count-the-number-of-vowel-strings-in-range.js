/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = new Set([..."aeiou"])
    let res = 0
    for (let i=left; i <= right; i++) {
        if (vowels.has(words[i].at(0)) && vowels.has(words[i].at(-1))) {
            res++
        }
    }
    return res
};