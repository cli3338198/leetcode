/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    n = n.toString(2)
    let lastOne = -1
    let res = 0
    for (let i=0; i < 64; i++) {
        if (lastOne !== -1 && n[i] === '1') {
            res = Math.max(res, i - lastOne)
        }
        if (n[i] === '1') {
            lastOne = i
        }
    }
    return res
};