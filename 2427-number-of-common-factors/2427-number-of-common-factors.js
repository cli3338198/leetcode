/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let res = 0
    for (let i=1; i <= Math.min(a, b); i++) {
        if (!(a % i) && !(b % i)) res++
    }
    return res
};