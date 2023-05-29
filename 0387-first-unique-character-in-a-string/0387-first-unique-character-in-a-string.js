/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    for (let i=0; i < s.length; i++) {
        const c = s[i]
        if (map.get(c) === -1 || map.has(c)) {
            map.set(c, -1)
        } else {
            map.set(c, i)
        }
    }
    map = Array.from(map.entries()).filter(([,i]) => i !== -1)
    if (map.length) {
        return map[0][1]
    }
    return -1
};