/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const m = s.length
    const n = t.length
    let a = 0
    let b = 0
    while (a < m && b < n) {
        if (s[a] === t[b]) {
            a++
        } 
        b++
    }
    return a === m
};