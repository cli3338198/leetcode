/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let l = 0
    let r = Math.floor(Math.sqrt(c))
    while (l <= r) {
        const total = l*l + r*r
        if (total === c) {
            return true
        } else if (total > c) {
            r--
        } else {
            l++
        }
    }
    return false
};