/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(1)
    let max = 1
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
};

lengthOfLIS = function(nums) {
    const dp = []
    for (const n of nums) {
        if (!dp.length || dp[dp.length-1].at(-1) < n) {
            dp.push([n])
        } else {
            const idx = binarySearch(n)
            dp[idx].push(n)
        }
    }
    return dp.length
    
    function binarySearch(n) {
        let l = 0, r = dp.length-1
        while (l < r) {
            const m = Math.floor((l+r)/2)
            const num = dp[m].at(-1)
            if (num < n) {
                l = m + 1
            } else {
                r = m
            }
        }
        return l
    }
}