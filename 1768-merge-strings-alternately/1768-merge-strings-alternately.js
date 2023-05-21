/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = ''
    let i = 0, j = 0
    for (i, j; i < word1.length && j < word2.length; i++, j++) {
        res += word1[i]
        res += word2[j]
    }
    if (i < word1.length) {
        res += word1.substring(i)
    }
    if (j < word2.length) {
        res += word2.substring(j)
    }
    return res
};

mergeAlternately = function(w1, w2) {
    let res = '', i = 0, j = 0
    while (i < w1.length && j < w2.length) {
        res += w1[i++]
        res += w2[j++]
    }
    if (i < w1.length) {
        res += w1.substring(i)
    }
    if (j < w2.length) {
        res += w2.substring(j)
    }
    return res
}