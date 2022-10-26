/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const n = s.length
    let zero = count(s)
    let one = 0
    let res = zero
    for (const char of s) {
        if (char === '0') {
            zero -= 1
        }
        if (char === '1') {
            one += 1
        }
        res = Math.min(res, zero + one)
    }
    return res
};

function count(s) {
    let res = 0
    for (const char of s) {
        if (char === '0') {
            res++
        }
    }
    return res
}