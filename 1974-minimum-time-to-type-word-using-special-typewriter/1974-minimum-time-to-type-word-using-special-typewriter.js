/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let res = word.length
    let cur = "a"
    for (const c of word) {
        const diff = Math.abs(c.charCodeAt(0)-cur.charCodeAt(0)) % 26
        res += Math.min(diff, 26 - diff)
        cur = c
    }
    return res
};