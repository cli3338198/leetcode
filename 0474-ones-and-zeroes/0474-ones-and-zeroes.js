/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    strs = strs.map(count)
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    for (let i=0; i < strs.length; i++) {
        for (let j=m; j >= strs[i][0]; j--) {
            for (let k=n; k >= strs[i][1]; k--) {
                dp[j][k] = Math.max(dp[j][k], 1 + dp[j-strs[i][0]][k-strs[i][1]])
            }
        }
    }
    return dp[m][n]
};

function count(str) {
    const res = [0, 0]
    for (const char of str) {
        if (char === '0') {
            res[0]++
        } else {
            res[1]++
        }
    }
    return res
}