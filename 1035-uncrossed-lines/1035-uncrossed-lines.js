/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const dp = {}
    return helper(0, 0)
    
    function helper(i, j) {
        const key = `${i} ${j}`
        if (key in dp) return dp[key]
        let res = 0
        for (let k=i; k < nums1.length; k++) {
            for (let l=j; l < nums2.length; l++) {
                if (nums1[k] === nums2[l]) {
                    res = Math.max(res, 1 + helper(k+1, l+1))
                }
            }
        }
        return res
    }
};

maxUncrossedLines = function(nums1, nums2) {
    // longest common subsequence!
    const m = nums1.length, n = nums2.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
}