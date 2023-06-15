/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const map = {}
    for (const c of word1) {
        map[c] = map[c] + 1 || 1
    }
    for (const c of word2) {
        if (c in map) {
            map[c]--
        } else {
            map[c] = -1
        }
    }
    for (const k in map) {
        if (map[k] !== 0 && Math.abs(map[k]) > 3) return false
    }
    return true
};

checkAlmostEquivalent = function(word1, word2) {
    const chars = Array(26).fill(0)
    for (const c of word1) {
        chars[c.charCodeAt(0)-97]++
    }
    for (const c of word2) {
        chars[c.charCodeAt(0)-97]--
    }
    return chars.every(char => Math.abs(char) <= 3)
}