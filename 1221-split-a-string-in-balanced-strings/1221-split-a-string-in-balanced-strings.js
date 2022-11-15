/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0
    let count = 0
    for (const c of s) {
        if (c === 'L') {
            count++
        } else {
            count--
        }
        if (count === 0) res++
    }
    return res
};