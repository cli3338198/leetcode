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

vowelStrings = function(words, left, right) {
    return words.reduce((acc, word, idx) => idx >= left && idx <= right ? acc + ('aeiou'.includes(word.at(0)) && 'aeiou'.includes(word.at(-1)) ? 1 : 0) : acc, 0)
}