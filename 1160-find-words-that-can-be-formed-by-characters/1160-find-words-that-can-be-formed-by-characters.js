/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map = {}
    for (const c of chars) {
        map[c] = map[c] + 1 || 1
    }
    let res = 0
    for (const word of words) {
        const copy = {...map}
        let flag = true
        for (const c of word) {
            if (!(c in copy) || copy[c] === 0) {
                flag = false
                break
            }
            copy[c]--
        }
        if (flag === true) res += word.length
    }
    return res
};