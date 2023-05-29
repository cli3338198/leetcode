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

firstUniqChar = function(s) {
    const abc = Array(26).fill(-Infinity)
    for (let i=0; i < s.length; i++) {
        const c = s[i]
        const idx = c.charCodeAt(0) - 97
        if (abc[idx] === -Infinity) {
            abc[idx] = i
        } else {
            abc[idx] = -1
        }
    }
    for (const c of s) {
        const idx = c.charCodeAt(0) - 97
        if (abc[idx] >= 0) return abc[idx]
    }
    return -1
}