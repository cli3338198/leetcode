/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const m = nums1.length
    const n = nums2.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    let res = 0
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } 
            res = Math.max(res, dp[i][j])
        }
    }
    return res
};