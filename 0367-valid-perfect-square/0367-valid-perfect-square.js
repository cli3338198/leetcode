/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true
    let l = 0
    let r = Math.floor(num / 2)
    while (l < r) {
        const m = Math.floor((l+r)/2)
        if (m * m === num) {
            return true
        } else if (m * m > num) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return l * l === num
};