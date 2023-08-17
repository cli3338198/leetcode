/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const smap = {}
    const tmap = {}
    let res = 0
    for (let i=0; i < s.length; i++) {
        smap[s[i]] = smap[s[i]] + 1 || 1
        tmap[t[i]] = tmap[t[i]] + 1 || 1
    }
    for (const c in tmap) {
        if (c in smap && tmap[c] > smap[c]) {
            res += tmap[c] - smap[c]
        } else if (!(c in smap)) {
            res += tmap[c]
        } 
    }
    return res
};

minSteps = function(s, t) {
    const arr = Array(26).fill(0)
    for (let i=0; i < s.length; i++) {
        arr[s[i].charCodeAt(0)-97]++
        arr[t[i].charCodeAt(0)-97]--
    }
    return arr.reduce((acc, val) => acc + (val > 0 ? val : 0), 0)
}