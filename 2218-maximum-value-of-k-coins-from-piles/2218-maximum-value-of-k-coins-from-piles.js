/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, coins) {
    const n = piles.length
    const dp = Array(coins+1).fill(0)
    for (let i=0; i < piles.length; i++) {
        for (let j=coins; j > 0; j--) {
            let sum = 0
            for (let k=1; k <= Math.min(j, piles[i].length); k++) {
                sum += piles[i][k-1]
                dp[j] = Math.max(dp[j], dp[j-k] + sum)
            }
        }
    }
    return dp[coins]
};