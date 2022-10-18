/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0)
    const halfSum = sum / 2
    if (Math.floor(sum/2) !== halfSum) return false
    nums.sort((a, b) => a - b)
    const n = nums.length
    const dp = []
    for (let i=0; i <= n; i++) {
        const row = []
        for (let j=0; j <= halfSum; j++) {
            if ((i === 0 && j === 0) || j === 0) {
                row.push(true)
            } else {
                row.push(false)
            }
        }
        dp.push(row)
    }
    for (let i=1; i <= n; i++) {
        for (let j=1; j <= halfSum; j++) {
            dp[i][j] = dp[i-1][j]
            if (nums[i-1] <= j) {
                dp[i][j] = dp[i][j] || dp[i-1][j-nums[i-1]]
            }
            if (j === halfSum && dp[i][j] === true) {
                return true
            }
        }
    }
    return false
};