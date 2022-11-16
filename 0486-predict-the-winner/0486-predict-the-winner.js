/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const n = nums.length
    const total = nums.reduce((acc, val) => acc + val, 0)
    const dp = {}
    const player1Score = helper(0, n-1)
    const player2Score = total - player1Score
    return player1Score >= player2Score
    
    function helper(l, r) {
        if ([l, r] in dp) return dp[[l, r]]
        if (l > r) return 0
        if (l === r) return nums[l]
        const score = Math.max(
            nums[l] + Math.min(helper(l+2, r), helper(l+1, r-1)),
            nums[r] + Math.min(helper(l, r-2), helper(l+1, r-1))
        )
        return dp[[l, r]] = score
    }
};