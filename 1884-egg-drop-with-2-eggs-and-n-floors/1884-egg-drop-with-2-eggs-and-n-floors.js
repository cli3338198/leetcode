/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    const dp = {}
    return helper(n, 2)
    
    function helper(n, eggs) {
        const key = `${n} ${eggs}`
        if (key in dp) return dp[key]
        if (n < 2) return n
        if (eggs === 1) return n
        let res = Infinity
        for (let i=1; i <= n; i++) {
            res = Math.min(res, 1 + Math.max(helper(i-1, eggs-1), helper(n-i, eggs)))
        }
        return dp[key] = res
    }
};

twoEggDrop = function(n) {
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    for (let lvl=1; lvl <= n; lvl++) {
        for (let curLvl=1; curLvl <= lvl; curLvl++) {
            dp[lvl] = Math.min(dp[lvl], 1 + Math.max(curLvl-1, dp[lvl-curLvl]))
        }
    }
    return dp[n]
}