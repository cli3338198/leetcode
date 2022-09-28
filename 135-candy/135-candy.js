/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length
    const dp = Array(n).fill(1)
    for (let i=1; i < n; i++) {
        if (ratings[i] > ratings[i-1]) {
            dp[i] = dp[i-1] + 1
        }
    }
    let sum = dp[n-1]
    for (let i=n-2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
            dp[i] = Math.max(dp[i], dp[i+1] + 1)
        }
        sum += dp[i]
    }
    return sum
};