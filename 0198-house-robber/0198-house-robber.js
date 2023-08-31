/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i=2; i < n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    }
    return dp[n-1]
};

rob = function(nums) {
    let twoHousesBack = nums[0], oneHouseBack = Math.max(nums[0], nums[1] || 0)
    for (let i=2; i < nums.length; i++) {
        [twoHousesBack, oneHouseBack] = [oneHouseBack, Math.max(oneHouseBack, twoHousesBack + nums[i])]
    }
    return Math.max(twoHousesBack, oneHouseBack)
}