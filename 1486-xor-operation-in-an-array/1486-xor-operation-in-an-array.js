/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let a = start
    let b = start
    while (--n) {
        a += 2
        b ^= a
    }
    return b
};