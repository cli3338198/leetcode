/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort((a, b) => a + b)
    const set = new Set(words)
    let res = ''
    for (const word of words) {
        let cur = ''
        for (const char of word) {
            cur += char
            if (!set.has(cur)) break
            if (res === '' || cur.length > res.length || (res.length === cur.length && cur < res)) {
                res = cur
            }
        }
    }
    return res
};