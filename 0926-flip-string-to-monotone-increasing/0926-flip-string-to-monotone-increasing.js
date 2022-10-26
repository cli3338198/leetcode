/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const n = s.length
    const left = Array(n).fill(0)
    let cur = 0
    for (let i=0; i < n; i++) {
        left[i] = cur
        if (s[i] === '1') {
            cur++
        }
    }
    const right = Array(n).fill(0)
    cur = 0
    for (let i=n-1; i >= 0; i--) {
        right[i] = cur
        if (s[i] === '0') {
            cur++
        }
    }
    let res = Infinity
    for (let i=0; i < n; i++) {
        res = Math.min(res, left[i] + right[i])
    }
    return res
};