/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const bits = makeBitsTable()
    let map = 0
    for (const char of allowed) {
        map |= bits[char]
    }
    let res = 0
    for (const word of words) {
        let flag = true
        for (const char of word) {
            if ((map & bits[char]) === 0) {
                flag = false
                break
            }
        }
        if (flag === true) res++
    }
    return res
};

function makeBitsTable() {
    const map = {}
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let cur = 1
    for (let i=0; i < alphabet.length; i++) {
        const c = alphabet[i]
        map[c] = cur
        cur <<= 1
    }
    return map
}