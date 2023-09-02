/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(0).map(() => ([1, 1]))
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i][0] = Math.max(dp[i][0], 1 + dp[j][1])
            } else if (nums[j] > nums[i]) {
                dp[i][1] = Math.max(dp[i][1], 1 + dp[j][0])
            }
        }
    }
    return Math.max(...dp[n-1])
};

wiggleMaxLength = function(nums) {
    let up = 1, down = 1
    for (let i=1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            up = down + 1
        } else if (nums[i] < nums[i-1]) {
            down = up + 1
        }
    }
    return Math.max(up, down)
}