/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = []
    for (let i=0; i <= n; i++) {
        let ans = 0
        let num = i
        while (num > 0) {
            ans += num & 1
            num = num >> 1
        }
        res.push(ans)
    }
    return res
};