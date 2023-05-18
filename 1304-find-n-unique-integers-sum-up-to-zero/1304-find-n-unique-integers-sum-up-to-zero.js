/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const res = []
    for (let i=(n % 2 ? n-1 : n); i > 0 && res.length < n-1; i--) {
        res.push(i)
        res.push(-i)
    }
    if (n % 2) res.push(0)
    return res
};