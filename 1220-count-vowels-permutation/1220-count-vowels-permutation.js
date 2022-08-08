/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    if (n === 0) return 0
    if (n === 1) return 5
    const mod = 10**9 + 7
    const dp = [{'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1}]
    for (let i=2; i <= n; i++) {
        const temp = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}
        temp['a'] = (dp[0]['e'] + dp[0]['i'] + dp[0]['u']) % mod
        temp['e'] = (dp[0]['a'] + dp[0]['i']) % mod
        temp['i'] = (dp[0]['e'] + dp[0]['o']) % mod
        temp['o'] = (dp[0]['i']) % mod
        temp['u'] = (dp[0]['i'] + dp[0]['o']) % mod
        dp[0] = temp
    }
    return Object.values(dp[0]).reduce((acc, v) => acc + v, 0) % mod
};