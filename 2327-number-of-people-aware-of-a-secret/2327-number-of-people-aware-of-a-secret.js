/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    const mod = Math.pow(10, 9) + 7
    const dp = Array(n+1).fill(0)
    dp[1] = 1
    for (let i=2; i <= n; i++) {
        for (let j=1; j < i; j++) {
            if (i-j < forget && i-j >= delay) {
                dp[i] += dp[j]
                dp[i] %= mod
            }
        }
    }
    let res = 0
    for (let i=0; i <= n; i++) {
        if (n - i < forget) res = (res + dp[i]) % mod
    }
    return res
};