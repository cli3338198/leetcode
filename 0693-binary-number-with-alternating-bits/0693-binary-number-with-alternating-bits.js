/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    return (n & (n >> 1)) === 0 && (n & (n >> 2)) === (n >> 2)
};