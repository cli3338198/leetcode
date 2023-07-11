/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const set = new Set()
    let newKey = ""
    for (const c of key) {
        if (!set.has(c) && c !== " ") {
            set.add(c)
            newKey += c
        }
    }
    const map = {}
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    for (let i=0; i < newKey.length; i++) {
        map[newKey[i]] = abc[i]
    }
    let res = ""
    for (const c of message) {
        if (c === " ") {
            res += c
        } else {
            res += map[c]
        }
    }
    return res
};