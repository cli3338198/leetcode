/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
    const mod = 10 ** 9 + 7
    const n = pressedKeys.length
    const dp = Array(n+1).fill(0)
    dp[0] = 1
    for (let i=1; i <= n; i++) {
        dp[i] = dp[i-1]
        if (i >= 2 && pressedKeys[i-1] === pressedKeys[i-2]) {
            dp[i] += dp[i-2] % mod
        } else {
            continue
        }
        if (i >= 3 && pressedKeys[i-1] === pressedKeys[i-3]) {
            dp[i] += dp[i-3] % mod
        } else {
            continue
        }
        if (pressedKeys[i-1] === '7' || pressedKeys[i-1] === '9') {
            if (i >= 4 && pressedKeys[i-1] === pressedKeys[i-4]) {
                dp[i] += dp[i-4] % mod
            }
        }
    }
    return dp[n] % mod
};