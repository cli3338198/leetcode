/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let l = 1
    let r = n
    while (l <= r) {
        const m = Math.floor((l+r)/2)
        const row = m * (m+1) / 2
        if (row === n) {
            return m
        } else if (row > n) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return r
};