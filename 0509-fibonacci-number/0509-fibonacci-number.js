/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n
    let a = 0
    let b = 1
    while (--n) {
        [a, b] = [b, a+b]
    }
    return b
};