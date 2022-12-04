/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y
    let res = 0
    while (xor) {
        xor = xor & (xor - 1)
        res++
    }
    return res
};