/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const dp = {}
    return helper(0, 0)
    
    function helper(i, j) {
        const key = `${i} ${j}`
        if (key in dp) {
            return dp[key]
        }
        if (i === s1.length && j === s2.length) {
            return i + j === s3.length
        }
        let res = false
        const k = i + j
        if (i < s1.length && s1[i] === s3[k]) {
            res = res || helper(i+1, j)
        }
        if (j < s2.length && s2[j] === s3[k]) {
            res = res || helper(i, j+1)
        }
        return dp[key] = res
    }
};