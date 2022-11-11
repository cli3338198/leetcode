/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const dp = Array(key.length+1).fill(0).map(() => Array(ring.length).fill(Infinity))
    dp[key.length].fill(0)
    for (let i=key.length-1; i >= 0; i--) {
        for (let j=0; j < ring.length; j++) {
            for (let k=0; k < ring.length; k++) {
                if (ring[k] === key[i]) {
                    const diff = Math.abs(j - k)
                    const distance = Math.min(diff, ring.length-diff)
                    dp[i][j] = Math.min(dp[i][j], distance + dp[i+1][k])
                }
            }
        }
    }
    return dp[0][0] + key.length
};