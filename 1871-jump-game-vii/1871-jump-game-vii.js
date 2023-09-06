/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    const n = s.length
    const dp = Array(n).fill(false)
    dp[0] = true
    let jumpPoints = 0
    for (let i=1; i < n; i++) {
        if (i > maxJump) {
            jumpPoints -= dp[i-maxJump-1] ? 1 : 0
        }
        if (i >= minJump) {
            jumpPoints += dp[i-minJump] ? 1 : 0
        }
        if (jumpPoints > 0 && s[i] === '0') {
            dp[i] = true
        }
    }
    return dp[n-1]
};